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

const no_ext = [{
  multiplier: 1,
  min: 1,
  max: 3999,
  cutoff: 1,
  romanMap: {
    I: 1, IV: 4, V: 5, IX: 9, X: 10,
    XL: 40, L: 50, XC: 90, C: 100,
    CD: 400, D: 500, CM: 900, M: 1000,
  },
  decimalMap: {
    '1': 'I', '4': 'IV', '5': 'V', '9': 'IX',
    '10': 'X', '40': 'XL', '50': 'L', '90': 'XC',
    '100': 'C', '400': 'CD', '500': 'D', '900': 'CM',
    '1000': 'M',
  },
  sorted: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
}]

const ibar = [
  {
    multiplier: 1,
    min: 1,
    max: 3999,
    cutoff: 1,
    romanMap: {
      I: 1, IV: 4, V: 5, IX: 9, X: 10,
      XL: 40, L: 50, XC: 90, C: 100,
      CD: 400, D: 500, CM: 900, M: 1000,
    },
    decimalMap: {
      '1': 'I', '4': 'IV', '5': 'V', '9': 'IX',
      '10': 'X', '40': 'XL', '50': 'L', '90': 'XC',
      '100': 'C', '400': 'CD', '500': 'D', '900': 'CM',
      '1000': 'M',
    },
    sorted: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  },

  {
    multiplier: 1000,
    min: 1000,
    max: 3999999,
    cutoff: 4000,
    romanMap: {
      'I̅': 1000, 'I̅V̅': 4000, 'V̅': 5000, 'I̅X̅': 9000,
      'X̅': 10000, 'X̅L̅': 40000, 'L̅': 50000, 'X̅C̅': 90000,
      'C̅': 100000, 'C̅D̅': 400000, 'D̅': 500000,
      'C̅M̅': 900000,
      'M̅': 1000000,
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


const no_ibar = [
  {
    multiplier: 1,
    min: 1,
    max: 3999,
    cutoff: 1,
    romanMap: {
      I: 1, IV: 4, V: 5, IX: 9, X: 10,
      XL: 40, L: 50, XC: 90, C: 100,
      CD: 400, D: 500, CM: 900, M: 1000,
    },
    decimalMap: {
      '1': 'I', '4': 'IV', '5': 'V', '9': 'IX',
      '10': 'X', '40': 'XL', '50': 'L', '90': 'XC',
      '100': 'C', '400': 'CD', '500': 'D', '900': 'CM',
      '1000': 'M',
    },
    sorted: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  },

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


let exp = {
  no_ext,
  ibar,
  no_ibar,
}

module.exports = exp

// let data = {}
// for ( let y in exp )
//   for ( let series of exp[y] ) {
//     for ( let x in series.romanMap ) {
//       data[x] = series.romanMap[x]
//     }
//   }
//
// console.log( data )
