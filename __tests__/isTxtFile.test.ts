import { isTxtFile } from "../services/charTest";

describe('isTxtFile', () => {
  it('This values should be true for .txt files', () => {
    expect(isTxtFile('example.txt')).toBe(true);
    expect(isTxtFile('/path/to/other/test/example.txt')).toBe(true)
    expect(isTxtFile('yet/a/txt/file.txt')).toBe(true)
  })
  it('This values should raise an error for non-.txt files ', () => {
    expect(isTxtFile('not.docx')).toBe(false)
    expect(isTxtFile('/another/pdf/file.pdf')).toBe(false)
    expect(isTxtFile('a/mp3/file.mp3')).toBe(false)
  })
})

