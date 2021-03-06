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

const base = require( './base' )

module.exports = [
  base,

  {
    multiplier: 1000,
    min: 4000,
    max: 3999999,
    cutoff: 4000,
    romanMap: {
      'MV̅': 4000, 'V̅': 5000, 'MX̅': 9000,
      'X̅': 10000, 'X̅L̅': 40000, 'L̅': 50000, 'X̅C̅': 90000,
      'C̅': 100000, 'C̅D̅': 400000, 'D̅': 500000,
      'C̅M̅': 900000, 'M̅': 1000000,
    },
    decimalMap: {
      '4000': 'MV̅', '5000': 'V̅', '9000': 'MX̅',
      '10000': 'X̅', '40000': 'X̅L̅', '50000': 'L̅', '90000': 'X̅C̅',
      '100000': 'C̅', '500000': 'D̅', '400000': 'C̅D̅',
      '900000': 'C̅M̅',
      '1000000': 'M̅',
    },
    sorted: [
      1000000,
      900000, 500000, 400000, 100000,
      90000, 50000, 40000, 10000,
      9000, 5000, 4000],
  }]
