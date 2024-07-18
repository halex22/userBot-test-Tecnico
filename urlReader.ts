import jsdom = require("jsdom");
import { Helper } from "./services/textReader";

const { JSDOM } = jsdom

const urlTarget = 'https://en.wikipedia.org/wiki/Programming_language'

export async function fetchHTML(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTPP error! Status ${response.status}`);
    }
    const html = await response.text();
    return html
  } catch (error) {
    console.log(`Error getting the source HTML code: ${error}`)
    return ''
  }
}

export function extractTextFromHTML(sourceCode: string): string {

  const dom = new JSDOM(sourceCode);
  const document = dom.window.document;

  document.querySelectorAll('style').forEach( styleTag => {
    styleTag.innerHTML = '';
  })

  document.querySelectorAll('script').forEach( sriptTag => {
    sriptTag.innerHTML = '';
  })

  const text = document.querySelector('body')?.textContent
  // const text = dom.window.document.querySelector('body')?.textContent
  return text ?? ''
}

// fetchHTML(urlTarget)
//   .then(html => {
//     // const sourceToClean = html ? html : '<body></body>' 
//     const plainText = extractTextFromHTML(html)
//     // console.log(plainText)
//     const helper = new Helper(plainText)
//     helper.readText()
//     helper.printReport()
//   })
