import fs from 'fs';
import { promisify} from 'util'

const txtFileReader = promisify(fs.readFile)


export async function readFile(path: string): Promise<string> {
  const ext = path.split('.')
  const ext_name = ext[ext.length - 1]
  let data : string = ''
  try {
    if (ext_name === 'txt') {
      data = await txtFileReader(path, {encoding: 'utf8'});
    }

  } catch (err: any) {
    throw new Error(`An Error accourred while reading the file: ${err.message}`)
  }
  return data
}
   
