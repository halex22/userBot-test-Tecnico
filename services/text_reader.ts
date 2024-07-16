import { isAlpha, isNumeric } from "./charTest";

class Helper {
  text: string;
  letterCount: number;
  spaceCount: number;
  totalWords: number ;
  wordsCount: {[key:string]: number};

  constructor (text: string) {
    this.text = text;
    this.letterCount = 0
    this.spaceCount = 0
    this.totalWords = 0
    this.wordsCount = {}
  }

  readText(): void {
    // [...this.text.split('')].forEach((token) => {
    //   console.log(token)
    // })
    if (this.text.length < 1) return

    let start = 0
    let movingIndex = start + 1 

    while (movingIndex < this.text.length) {
      
      const character = this.text[movingIndex]

      if (isAlpha(character)) {
        this.letterCount ++
        movingIndex ++
        continue
      }

      if (isNumeric(character)) {
        start = movingIndex + 1
        movingIndex ++
        continue
      }

      const isWhiteSpace = character === ' '

      if (isWhiteSpace) {
        this.spaceCount ++
      }

      const wordFound = this.text.slice(start, movingIndex)
      console.log(wordFound)
      start = movingIndex + 1
      movingIndex ++
      this.pushToWordCount(wordFound)

    }
  }

  printReport(): void {
    console.log(`total n. of letters ${this.letterCount}`)
    console.log(`total n. of white spaces ${this.spaceCount}`)
    console.log(`total n. of words ${this.totalWords}`)
    console.log(`most common words ${JSON.stringify(this.wordsCount)}`)
  }

  pushToWordCount(word: string): void {
    this.wordsCount[word] > 0 ? this.wordsCount[word] ++ : this.wordsCount[word] = 1
    console.log(this.wordsCount)
  }

  computeWord(word: string): void {

  }

}

const helper = new Helper('this is my test test testasd test 4 rw')
helper.readText()
helper.printReport()

// MY TODO get input text A and B 
// A if it is a file and B if it is url 



// TODO il numero totale di parole          DONE !!
// TODO il numero di lettere nel file       DONE !!
// TODO il numero di spazi nel file         DONE !!
// TODO parole che si repetono più di 10 volte e indicare il numero di volte in cui si repete  