import { isAlpha, isNumeric, isPuntuation } from "./charTest";

export class Helper {
  text: string;
  letterCount: number;
  spaceCount: number;
  totalWords: number ;
  wordCounts: {[key: string]: number}; 

  constructor (text: string) {
    this.text = text;
    this.letterCount = 0
    this.spaceCount = 0
    this.totalWords = 0
    this.wordCounts = {}
  }

  readText(): void {
    if (this.text.length < 1) return

    let start = 0
    let movingIndex = start  

    const stopValue = this.text.length - 1 

    while (movingIndex <= stopValue) {
      
      const character = this.text[movingIndex]
      // console.log(`checking ${character}`)

      if (character === ' ') {
        start ++
        this.spaceCount ++
        movingIndex ++
        continue
      }

      if (isAlpha(character)) {
        this.letterCount ++
        movingIndex ++
        const nextChar = this.text[movingIndex]
        if (nextChar !== ' ' && nextChar !== undefined && !(isPuntuation(nextChar)) ) continue
        const wordFound = this.text.slice(start, movingIndex)
        this.computeWord(wordFound)
        start = movingIndex
        continue
      }

      if (isNumeric(character)) {
        movingIndex ++
        start = movingIndex
        continue
      }

      // in case of puntuation, \n and others
      start ++
      movingIndex ++

    }
  }

  printReport(): void {
    console.log(`total n. of letters ${this.letterCount}`)
    console.log(`total n. of white spaces ${this.spaceCount}`)
    console.log(`total n. of words ${this.totalWords}`)
    console.log(`most common words ${JSON.stringify(this.wordCounts)}`)
    // this.cleanWordCounts()
  }

  computeWord(word: string): void {
    this.totalWords ++
    this.wordCounts[word] > 0 ? this.wordCounts[word] ++ : this.wordCounts[word] = 1
  }

  cleanWordCounts(): void {
    const relevantWords = []
    for (const key in this.wordCounts) {
      if (this.wordCounts.hasOwnProperty(key)) {
        const value = this.wordCounts[key];
        console.log(`Key: ${key}, Value: ${value}`);
      }
    }    
  }

}

// const helper = new Helper('this is my test!  test tosted. test 4 rw')
// helper.readText()
// helper.printReport()


// MY TODO get input text A and B 
// A if it is a file and B if it is url 



// TODO il numero totale di parole          DONE !!
// TODO il numero di lettere nel file       DONE !!
// TODO il numero di spazi nel file         DONE !!
// TODO parole che si repetono più di 10 volte e indicare il numero di volte in cui si repete  