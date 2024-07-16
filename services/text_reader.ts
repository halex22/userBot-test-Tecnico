import { isAlpha, isNumeric } from "./charTest";

class Helper {
  text: string;
  letterCount: number;
  spaceCount: number;
  totalWords: number ;
  words: [] | [string];

  constructor (text: string) {
    this.text = text;
    this.letterCount = 0
    this.spaceCount = 0
    this.totalWords = 0
    this.words = []
  }

  readText(): void {
    if (this.text.length < 1) return

    let start = 0
    let movingIndex = start  

    const stopValue = this.text.length - 1 

    while (movingIndex <= stopValue) {
      
      const character = this.text[movingIndex]
      console.log(`procesing character ${character}`)


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
        if (nextChar !== ' ' && nextChar !== undefined ) continue
        const wordFound = this.text.slice(start, movingIndex)
        console.log(wordFound)
        this.totalWords ++
        start = movingIndex
        continue
      }

      if (isNumeric(character)) {
        movingIndex ++
        start = movingIndex
      }

    }
  }

  printReport(): void {
    console.log(`total n. of letters ${this.letterCount}`)
    console.log(`total n. of white spaces ${this.spaceCount}`)
    console.log(`total n. of words ${this.totalWords}`)
    // console.log(`most common words ${JSON.stringify(this.wordsCount)}`)
  }

  // pushToWordCount(word: string): void {
  //   this.wordsCount[word] > 0 ? this.wordsCount[word] ++ : this.wordsCount[word] = 1
  // }

  computeWord(word: string): void {

  }

}

const helper = new Helper('this is my test test tosted test 4 rw')
helper.readText()
helper.printReport()

// MY TODO get input text A and B 
// A if it is a file and B if it is url 



// TODO il numero totale di parole          DONE !!
// TODO il numero di lettere nel file       DONE !!
// TODO il numero di spazi nel file         DONE !!
// TODO parole che si repetono più di 10 volte e indicare il numero di volte in cui si repete  