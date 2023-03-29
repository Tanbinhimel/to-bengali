# To Bengali

[![npm version](https://img.shields.io/npm/v/to-bengali.svg)](https://www.npmjs.com/package/to-bengali)
[![License](https://img.shields.io/npm/l/to-bengali.svg)](https://github.com/Tanbinhimel/to-bengali/blob/main/LICENSE)

To Bengali is a lightweight npm package for translating numbers and dates to Bengali language. It's perfect for
developers who need to localize their applications for Bengali speakers.

## Installation

To install this package, use npm:

```shell
npm i to-bengali
```

## Usage

**To Bengali** exports two Class: **Bengali Date** and **Bengali Number**.

### Bengali Date
To import Bengali Date class:

```shell
import {BengaliDate} from 'to-bengali';
```

To use this class:
```shell
const date = new Date('29 november, 1998');
const bngDateTime = new BengaliDate(date); // BengaliDate() will return current date-time
console.log(bngDateTime.bngDate); // output: ২৯
```

### Bengali Number
To import Bengali Number class:

```shell
import {BengaliNumber} from 'to-bengali';
```

To use this class:
```shell
const bengaliNumber = new BengaliNumber(100);
console.log(bengaliNumber.bngValue); // output: ১০০
```

**more description will be added later.*

## Contributing
If you find a bug or would like to contribute to the project, please check out the [contribution guidelines](CONTRIBUTION.md).

## License
To Bengali is licensed under the [MIT license](LICENSE).
