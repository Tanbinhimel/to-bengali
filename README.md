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

Properties:
<table>
<tr>
    <th>Name</th>
    <th>Return Types</th>
    <th>Description</th>
</tr>
<tr>
    <td>bngDate</td>
    <td>string</td>
    <td>Returns date in bengali.</td>
</tr>
<tr>
    <td>bngMonthInNumber</td>
    <td>string</td>
    <td>Returns month in number in bengali.</td>
</tr>
<tr>
    <td>bngMonth</td>
    <td>string</td>
    <td>Returns month in words in bengali.</td>
</tr>
<tr>
    <td>bngFullYear</td>
    <td>string</td>
    <td>Returns full years (4 digits) in bengali.</td>
</tr>
<tr>
    <td>bngYear</td>
    <td>string</td>
    <td>Returns years (last 2 digits) in bengali.</td>
</tr>
<tr>
    <td>bngHours</td>
    <td>string</td>
    <td>Returns hours (24-hours format) in bengali.</td>
</tr>
<tr>
    <td>bngHoursInTwelveHourFormat</td>
    <td>string</td>
    <td>Returns hours (12-hours format) in bengali.</td>
</tr>
<tr>
    <td>bngMinutes</td>
    <td>string</td>
    <td>Returns minutes in bengali.</td>
</tr>
<tr>
    <td>bngSeconds</td>
    <td>string</td>
    <td>Returns seconds in bengali.</td>
</tr>
<tr>
    <td>bngTimeName</td>
    <td>"ভোর" | "সকাল" | "দুপুর" | "বিকাল" | "সন্ধ্যা" | "রাত"</td>
    <td>Returns time name in bengali.</td>
</tr>
<tr>
    <td>bngDay</td>
    <td>string</td>
    <td>Returns day name in bengali (first 2 characters).</td>
</tr>
<tr>
    <td>bngFullDay</td>
    <td>string</td>
   <td>Returns full day name in bengali (all characters).</td>
</tr>
<tr>
    <td>engTimeName</td>
    <td>"PM" | "AM"</td>
    <td>Returns time name in english.</td>
</tr>
</table>

Methods:
<div><b><i>format(pattern?: string): string</i></b></div>
<div>To use this method:</div>

```shell
const date = new Date('29 november, 1998');
const bngDateTime = new BengaliDate(date).format('DD MMMM, YYYY dddd AAAA hh:mm:ss')
console.log(bngDateTime); // output: ২৯ নভেম্বর, ১৯৯৮ রবিবার রাত ১২:০০:০০
```
Others supported patterns:
<table>
<tr>
    <th>Patters</th>
    <th>Description</th>
    <th>Example</th>
</tr>
<tr>
    <td>date</td>
    <td>Returns date</td>
    <td>'২৯ নভেম্বর, ১৯৯৮'</td>
</tr>
<tr>
    <td>time</td>
    <td>Returns time</td>
    <td>'রাত ১২:০০'</td>
</tr>
<tr>
    <td>date-time</td>
    <td>Default value. Returns date & time</td>
    <td>'২৯ নভেম্বর, ১৯৯৮ রাত ১২:০০'</td>
</tr>
<tr>
    <td>date-day-time</td>
    <td>Returns date & time</td>
    <td>'২৯ নভেম্বর, ১৯৯৮ রবিবার রাত ১২:০০'</td>
</tr>
<tr>
    <td>D</td>
    <td>Returns date</td>
    <td>2 as '২'</td>
</tr>
<tr>
    <td>DD</td>
    <td>Returns double digits date (Prefix date with '০' if it's a single digit, otherwise return original date)</td>
    <td>2 as '০২'</td>
</tr>
<tr>
    <td>M</td>
    <td>Returns month in numbers</td>
    <td>January as '১'</td>
</tr>
<tr>
    <td>MM</td>
    <td>Returns double digits month in numbers (Prefix month number with '০' if it's a single digit, otherwise return original month)</td>
    <td>January as '০১'</td>
</tr>
<tr>
    <td>MMMM</td>
    <td>Returns month in words</td>
    <td>November as 'নভেম্বর'</td>
</tr>
<tr>
    <td>YY</td>
    <td>Returns last two digits of the year</td>
    <td>1998 as '৯৮'</td>
</tr>
<tr>
    <td>YYYY</td>
    <td>Returns full year</td>
    <td>1998 as '১৯৯৮'</td>
</tr>
<tr>
    <td>dd</td>
    <td>Returns day in short form</td>
    <td>Sunday as 'রবি'</td>
</tr>
<tr>
    <td>dddd</td>
    <td>Returns day in full form</td>
    <td>Sunday as 'রবিবার'</td>
</tr>
<tr>
    <td>AAAA</td>
    <td>Returns time name in bengali</td>
    <td>"ভোর" | "সকাল" | "দুপুর" | "বিকাল" | "সন্ধ্যা" | "রাত"</td>
</tr>
<tr>
    <td>AA</td>
    <td>Returns time name in english (uppercase)</td>
    <td>"PM" | "AM"</td>
</tr>
<tr>
    <td>aa</td>
    <td>Returns time name in english (lowercase)</td>
    <td>"pm" | "am"</td>
</tr>
<tr>
    <td>h</td>
    <td>Returns hours in 12 hour format</td>
     <td>2 as '২'</td>
</tr>
<tr>
    <td>hh</td>
    <td>Returns double digit hours in 12 hour format</td>
    <td>2 as '০২'</td>
</tr>
<tr>
    <td>H</td>
    <td>Returns hours in 24 hour format</td>
    <td>2 as '২'</td>
</tr>
<tr>
    <td>HH</td>
    <td>Returns double digit hours in 24 hour format</td>
    <td>2 as '০২'</td>
</tr>
<tr>
    <td>m</td>
    <td>Returns minutes</td>
    <td>2 as '২'</td>
</tr>
<tr>
    <td>mm</td>
    <td>Returns double digit minutes</td>
    <td>2 as '০২'</td>
</tr>
<tr>
    <td>s</td>
    <td>Returns seconds</td>
    <td>2 as '২'</td>
</tr>
<tr>
    <td>ss</td>
    <td>Returns double digit seconds</td>
    <td>2 as '০২'</td>
</tr>
</table>

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

Properties:
<table>
<tr>
    <th>Name</th>
    <th>Return Types</th>
    <th>Description</th>
</tr>
<tr>
    <td>bngValue</td>
    <td>string</td>
    <td>Returns bengali value of a number</td>
</tr>
<tr>
    <td>engValue</td>
    <td>string</td>
    <td>Returns english value of a number</td>
</tr>
</table>

**more description will be added later.*

## Contributing

If you find a bug or would like to contribute to the project, please check out
the [contribution guidelines](CONTRIBUTION.md).

## License

To Bengali is licensed under the [MIT license](LICENSE).
