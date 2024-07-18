import fs from 'fs';
import { promisify} from 'util'

const txtFileReader = promisify(fs.readFile)


export async function readFile(path: string): Promise<string> {
  try {
    const data = await txtFileReader(path, {encoding: 'utf8'});
    return data
  } catch (err: any) {
    throw new Error(`An Error accourred while reading the file: ${err.message}`)
  }
}
   
