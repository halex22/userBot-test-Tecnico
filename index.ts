import { Helper } from "./services/text_reader";
import { readFile } from "./fileReader";


async function main() {
  const text = await readFile('./test.txt')
  const helper = new Helper(text)
  helper.readText();
  helper.printReport();
}

main()