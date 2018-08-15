// Copyright 2017, Venkat Peri.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const apostrophus = [
  base,

  {
    multiplier: 1000,
    min: 1000,
    max: 3999999,
    cutoff: 4000,
    romanMap: {
      '|Ɔ': 500,
      '\u2180': 1000, // \u2180 'C|Ɔ': 1000,
      '\u2181': 5000,
      '\u2182': 10000,
      '\u2187': 50000,
      '\u2188': 100000,
    },
    decimalMap: {
      '1000': 'I̅', '4000': 'I̅V̅', '5000': 'V̅', '9000': 'I̅X̅',
      '10000': 'X̅', '40000': 'X̅L̅', '50000': 'L̅', '90000': 'X̅C̅',
      '100000': 'C̅', '400000': 'C̅D̅',
      '500000': 'D̅',
      '900000': 'C̅M̅',
      '1000000': 'M̅',
    },
    sorted: [
      1000000, 900000, 500000, 400000, 100000,
      90000, 50000, 40000, 10000, 9000,
      5000, 4000, 1000],
  }]

