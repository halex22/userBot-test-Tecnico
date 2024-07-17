export function isAlpha(char: string): boolean  {
  return /[a-zA-Z]/.test(char)
}

export function isNumeric(char: string): boolean {
  return /\d/.test(char)
}

export function isPuntuation(char: string): boolean {
  const punctuationRegex = /[.,!;:(){}[\]<>?/\\|`~@#$%^&*_\-+=']/;
  return punctuationRegex.test(char)
}