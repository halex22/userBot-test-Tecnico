import { Helper } from "./services/text_reader";
import fs from 'fs';

fs.readFile('./text samples/150.txt', { encoding: 'utf8'}, (error, data) => {
  if (error) {
    console.error('Error reading the file:', error);
    return;
  }
  console.log(typeof(data))
  const helper = new Helper(data)
  helper.readText();
  helper.printReport();
})

// function readLines(filePath: string): Promise<string[]> {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, {encoding: 'utf8'}, (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       const lines = data.split(/\r?\n/);
//       resolve(lines);
//     })
//   })
// }

// async function run() {
//   const lines = await readLines('./test.txt')
//   lines.forEach((line) => {
//     const helper = new Helper(line)
//     helper.readText()
//     helper.printReport()
//   })
// }

// run()