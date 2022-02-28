import * as fs from 'fs'
import * as path from 'path'
import { from_csv, to_csv } from '@beenotung/tslib/csv'

function main(selfFile: string, ext: string) {
  let separator = ','
  if (ext === 'tsv') {
    separator = '\t'
  }

  let inFilename: string | undefined
  let outFilename: string | undefined
  for (let i = 0, len = process.argv.length; i < len; i++) {
    let arg = process.argv[i]
    if (arg === '-o' || arg === '--output') {
      i++
      outFilename = process.argv[i]
    } else if (arg === '-i' || arg === '--input') {
      i++
      inFilename = process.argv[i]
    } else if (arg === '-h' || arg === '--help') {
      let file = path.basename(selfFile)
      console.log(`Example with file: ${file} -i in.${ext} -o out.${ext}`)
      console.log(`Example with pipe: cat in.${ext} | ${file} > out.${ext}`)
      return
    }
  }

  let input: string
  if (inFilename) {
    input = fs.readFileSync(inFilename).toString()
  } else {
    input = fs.readFileSync(0).toString()
  }
  if (!input) {
    console.error('Error: input is empty!')
    process.exit(1)
  }

  let rows = from_csv(input, separator)

  let maxCol = rows.reduce((acc, cols) => Math.max(acc, cols.length), 0)

  let results: string[][] = []
  for (let i = 0; i < maxCol; i++) {
    let result: string[] = []
    rows.forEach(cols => result.push(cols[i]))
    results.push(result)
  }

  let output = to_csv(results, separator)

  if (outFilename) {
    fs.writeFileSync(outFilename, output)
    console.error('saved to', outFilename)
  } else {
    process.stdout.write(output)
  }
}

module.exports = main
