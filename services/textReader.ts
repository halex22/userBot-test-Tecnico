import { isAlpha, isPuntuation } from "./charTest";

// Singleton design patter -- there can only be on Helper instance 
export class Helper {
  private static instance: Helper;

  // text: string;
  letterCount: number;
  spaceCount: number;
  totalWords: number ;
  wordCounts: {[key: string]: number}; 

  private constructor () {
    // this.text = text;
    this.letterCount = 0
    this.spaceCount = 0
    this.totalWords = 0
    this.wordCounts = {}
  }

  public static getInstance(): Helper {
    if (!Helper.instance) {
      Helper.instance =  new Helper();
    }
    return Helper.instance
  }

  resetAfterReading(): void {
    this.wordCounts = {}
    this.totalWords = 0
    this.letterCount = 0
    this.spaceCount = 0
  }
  

  readText(textToRead: string): void {
    if (textToRead.length < 1) return

    let start = 0
    let movingIndex = start  

    const stopValue = textToRead.length - 1 

    while (movingIndex <= stopValue) {
      
      const character = textToRead[movingIndex]

      if (isAlpha(character)) {
        this.letterCount ++
        movingIndex ++
        const nextChar = textToRead[movingIndex]
        if (nextChar !== ' ' && nextChar !== undefined && !(isPuntuation(nextChar)) ) continue
        const wordFound = textToRead.slice(start, movingIndex)
        this.computeWord(wordFound)
        start = movingIndex
        continue
      }

      if (character === ' ') {
        this.spaceCount ++
      }

      movingIndex ++
      start = movingIndex

    }
  }

  printReport(): void {
    const moreThanTen = this.filterCommonWords()
    console.log(`total n. of letters ${this.letterCount}`)
    console.log(`total n. of white spaces ${this.spaceCount}`)
    console.log(`total n. of words ${this.totalWords}`)
    console.log(`Words that repeat more than 10 times: ${JSON.stringify(moreThanTen)}`)
  }

  getResult(): {} {
    const filterdCommonWords = this.filterCommonWords()
    const result = {
      totalLetters: this.letterCount,
      totalWords: this.totalWords,
      totalSpaces: this.spaceCount,
      moreThanTen: filterdCommonWords
    }
    this.resetAfterReading()
    return result
  } 

  computeWord(word: string): void {
    this.totalWords ++
    this.wordCounts[word] > 0 ? this.wordCounts[word] ++ : this.wordCounts[word] = 1
  }

  filterCommonWords(): {[key: string] : number} {
    return Object.fromEntries(
      Object.entries(this.wordCounts).filter(([ key, value]) => value > 10)
    )
  }

}

// TODO il numero totale di parole          DONE !!
// TODO il numero di lettere nel file       DONE !!
// TODO il numero di spazi nel file         DONE !!
// TODO parole che si repetono più di 10 volte e indicare il numero di volte in cui si repete  