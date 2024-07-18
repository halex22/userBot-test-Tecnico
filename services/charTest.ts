// includo hyphen and apostrophe 
import path from 'path';

export function isAlpha(char: string): boolean  {
  return /[a-zA-Z'-]/.test(char)
}

export function isNumeric(char: string): boolean {
  return /\d/.test(char)
}

export function isPuntuation(char: string): boolean {
  const punctuationRegex = /[.,!;:(){}[\]<>?/\\|`~@#$%^&*_\+=]/;
  return punctuationRegex.test(char)
}

// export function isTxtFile(filename: string): boolean {
//   const txtFilePattern = /^[\w,\s-]+\.[Tt][Xx][Tt]$/;
//   return txtFilePattern.test(filename);
// }


export function isTxtFile(filePath: string): boolean {
  const ext = path.extname(filePath).toLowerCase();
  return ext === '.txt';
}