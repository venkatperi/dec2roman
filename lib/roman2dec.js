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

const allSymbols = {
  I: 1, IV: 4, V: 5, IX: 9, X: 10, XL: 40, L: 50,
  XC: 90, C: 100, CD: 400, D: 500, CM: 900, M: 1000,
  'I̅': 1000, 'I̅V̅': 4000, 'V̅': 5000, 'I̅X̅': 9000,
  'X̅': 10000, 'X̅L̅': 40000, 'L̅': 50000, 'X̅C̅': 90000,
  'C̅': 100000,
  'C̅D̅': 400000,
  'C̅M̅': 900000,
  'D̅': 500000,
  'M̅': 1000000,
  'MV̅': 4000, 'MX̅': 9000,
}

let sorted = Object.keys( allSymbols ).sort( ( a, b ) => b.length - a.length )

// console.log(sorted)

/**
 * Returns the decimal representation of a given Roman number {String}
 *
 * @param str {String} The roman number to be converted
 * @returns {Number} the decimal equivalent
 */
function roman2Dec( str ) {
  let value = 0
  let i = 0
  while ( str.length ) {
    let s = sorted.find( s => str.startsWith( s ) )
    if ( !s ) throw new Error( `Bad symbol(s) at index ${i + 1}` )
    value += allSymbols[s]
    str = str.slice( s.length )
    i += s.length
  }
  return value
}

module.exports = {
  roman2Dec,
}


