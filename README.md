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

## License

This project is licensed with [BSD-2-Clause](./LICENSE)

This is free, libre, and open-source software. It comes down to four essential freedoms [[ref]](https://seirdy.one/2021/01/27/whatsapp-and-the-domestication-of-users.html#fnref:2):

- The freedom to run the program as you wish, for any purpose
- The freedom to study how the program works, and change it so it does your computing as you wish
- The freedom to redistribute copies so you can help others
- The freedom to distribute copies of your modified versions to others
