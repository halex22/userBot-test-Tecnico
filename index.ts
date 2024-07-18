import { Helper } from "./services/textReader";
import { readFile } from "./fileReader";
import { isTxtFile } from './services/charTest';
import { getUserInput } from "./services/userInput";
import { fetchHTML, extractTextFromHTML } from "./urlReader";




// function main() {
//   const testSamples = ['text samples/mid.txt', 'text samples/small.txt']

//   testSamples.forEach( async (filePath) => {
//     const text = await readFile(filePath)
//     const helper = Helper.getInstance()
//     helper.readText(text);
//     helper.printReport();
//   })
// }

async function main() {
  const helper = Helper.getInstance()
  let text: string  = ' '
  let pathToFile: string = ''

  pathToFile = await getUserInput('Write the path to a txt file or and url link \n')
  console.log(`Input recived... searching for '${pathToFile}' `)

  if (isTxtFile(pathToFile)) {
    console.log('Trying to read txt file')
    text = await readFile(pathToFile)
  } else {
    const sourceCode = await fetchHTML(pathToFile)
    text = extractTextFromHTML(sourceCode)
  }

  helper.readText(text)
  helper.printReport()
  
}

main()