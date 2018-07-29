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

const { invert } = require( './util' )
const binarySearch = require( './binary-search' );
const find = ( arr, ...args ) => arr[binarySearch( arr, ...args )]

const comparator = ( a, b ) => b - a

module.exports = ( romanMap, baseRoman ) => {

  const decimalMap = invert( romanMap )
  const sorted = Object.values( romanMap ).sort( comparator )
  const symbol = x => find( sorted, x, comparator )
  const minVal = baseRoman ? 1000 : 1
  baseRoman = baseRoman ? baseRoman : x => ''

  const d2r = x => {
    if ( x < minVal ) return baseRoman( x )
    const v = symbol( x )
    return decimalMap[v] + d2r( x - v );
  }

  function dec2Roman( x ) {
    if ( typeof x !== 'number' ) throw new Error( 'not a number' )
    return d2r( x )
  }

  return dec2Roman
}
