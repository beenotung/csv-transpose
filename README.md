# csv-transpose
[![npm Package Version](https://img.shields.io/npm/v/csv-transpose.svg?maxAge=2592000)](https://www.npmjs.com/package/csv-transpose)

Transpose (rotate) data from rows to columns or vice verse in csv/tsv

## Installation
```bash
npm i -g csv-transpose
```

Executables:
- `csv-transpose`
- `tsv-transpose`

## Examples

### View Help Messages
```bash
csv-transpose --help
```

### Using files
```bash
csv-transpose -i in.csv -o out.csv
```

### Using pipe
```bash
cat in.csv | csv-transpose > out.csv
```

The file mode and pipe mode can be used in combination.
