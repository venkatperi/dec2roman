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

const { powerOfTen, invert } = require( './util' )
const binarySearch = require( './binary-search' );

module.exports = ( romanMap, baseRoman ) => {

  /**
   * Generate subtractive items, e.g. 'IV', 'IX'
   */
  function genSub( map ) {
    const symbols = Object.keys( map )
    let sub = {
      symbol: symbols[0],
      value: map[symbols[0]],
    }
    for ( let symbol of symbols.slice( 1 ) ) {
      let value = map[symbol]
      map[`${sub.symbol}${symbol}`] = value - sub.value
      if ( powerOfTen( value ) )
        sub = { symbol, value }
    }
  }

  genSub( romanMap )

  const decimalMap = invert( romanMap )

  const sortedValues = Object.values( romanMap ).sort( ( a, b ) => b - a )

  function findRoman( x ) {
    return sortedValues[binarySearch( sortedValues, x, ( a, b ) => b - a )]
  }

  const minVal = baseRoman ? 1000 : 1
  baseRoman = baseRoman ? baseRoman : x => ''
  const _d2r = ( x, v ) => decimalMap[v] + d2r( x - v )
  const d2r = x => x < minVal ? baseRoman( x ) : _d2r( x, findRoman( x ) )

  function dec2Roman( x ) {
    if ( typeof x !== 'number' ) throw new Error( 'not a number' )
    return d2r( x )
  }

  return dec2Roman
}
