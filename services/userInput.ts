import * as readline from 'readline'

export function getUserInput(query: string): Promise<string> {
  const lineReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => lineReader.question(query, (answer) => {
    lineReader.close();
    resolve(answer);
  }));
}