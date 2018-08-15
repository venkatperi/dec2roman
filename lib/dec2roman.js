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

const _ = require( 'lodash' );
const symbols = require( './data' )
const { find, descending } = require( './binary-search' );
const { numParts } = require( './util' )
const { d2rf } = require( './data/fractions' )

// Sanity check
const MAXSIZE = 50000

const noop = () => ''

const d2r = ( next, { decimalMap, sorted, min, cutoff } ) => {
  const symbol = x => find( sorted, x, descending )

  return x => {
    if ( x < cutoff ) return next( x )
    let r = ''
    while ( x >= min ) {
      const v = symbol( x )
      r += decimalMap[v]
      x -= v
      if ( r.length >= MAXSIZE )
        throw new RangeError( `Result too large (> ${MAXSIZE} chars)` )
    }
    return r + next( x )
  }
}

let converters = _.mapValues( symbols, v => v.reduce( d2r, noop ) )


/**
 * Converts a {Number} into it's Roman equivalent.
 *
 * @param {Number} x the number to be converted into Roman
 *
 * @param {'ibar'|'no_ibar'|'no_ext'} [mode='ibar']
 *
 *   - 'ibar' - (Default) With vincumlum extensions. Use I̅ instead of M for extended 1000s.
 *   - 'no_ibar' - With vincumlum extensions. Use M for all 1000s.
 *   - 'no_ext' - Stick with basics. No vinculum extensions etc.
 * @return {String} The roman equivalent
 */
function dec2Roman( x, { mode = 'ibar' } = {} ) {
  if ( !symbols[mode] )
    throw new Error( 'Bad mode' )

  x = +x

  if ( Number.isNaN( x ) )
    throw new Error( 'Not a valid number' )

  if ( x <= 0 )
    throw new Error( 'Must be >= 0' )

  let num = numParts( x )

  let res = converters[mode]( num.i )  // integer part
  if ( num.f ) {
    res += d2rf( num.f )
  }
  return res;
}


module.exports = {
  dec2Roman,
}

