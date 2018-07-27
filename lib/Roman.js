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

const symbols = {
  roman: {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  },
};

/**
 * Generate subtractive items
 */
( () => {
  let roman = Object.keys( symbols.roman )
  let prev = { r: roman[0], v: symbols.roman[roman[0]] }
  for ( let r of roman.slice( 1 ) ) {
    let v = symbols.roman[r]
    symbols.roman[`${prev.r}${r}`] = v - prev.v
    if ( powerOfTen( v ) )
      prev = { v, r }
  }
} )()


symbols.decimal = invert( symbols.roman )

symbols.sorted = Object.values( symbols.roman ).sort( ( a, b ) => b - a )

function dec2Roman( x ) {
  if ( typeof x !== 'number' ) throw new Error( 'not a number' )
  if ( x <= 0 ) return ''

  for ( const v of symbols.sorted ) {
    if ( x >= v ) {
      return symbols.decimal[v] + dec2Roman( x - v );
    }
  }
}

console.log( dec2Roman( 451 ) )

module.exports = {
  dec2Roman,
}
