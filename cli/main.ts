import * as fs from 'fs'
import * as path from 'path'
import { transpose } from '../lib/core'

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

  let output = transpose(input, separator)

  if (outFilename) {
    fs.writeFileSync(outFilename, output)
    console.error('saved to', outFilename)
  } else {
    process.stdout.write(output)
  }
}

module.exports = main
