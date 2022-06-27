import { from_csv, to_csv } from '@beenotung/tslib/csv'

export function transpose(input: string, separator: string): string {
  let rows = from_csv(input, separator)

  let maxCol = rows.reduce((acc, cols) => Math.max(acc, cols.length), 0)

  let results: string[][] = []
  for (let i = 0; i < maxCol; i++) {
    let result: string[] = []
    rows.forEach(cols => result.push(cols[i]))
    results.push(result)
  }

  let output = to_csv(results, separator)

  return output
}
