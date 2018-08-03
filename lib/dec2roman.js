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

const symbols = require( './symbols' )
const d2r = require( './d2r' )
const noop = x => ''

let converters = {}
for ( let mode in symbols ) {
  converters[mode] = symbols[mode].reduce( ( prev, s ) => d2r( s, prev ), noop )
}

/**
 * Converts a {Number} into it's Roman equivalent.
 *
 * @param x {Number} the number to be converted into Roman
 * @param mode {String}
 *     'ibar' - (Default) With vincumlum extensions. Use I̅ instead of M for extended 1000s.
 *     'no_ibar' - With vincumlum extensions. Use M for all 1000s.
 *     'no_ext' - Stick with basics. No vinculum extensions etc.
 * @return {String} The roman equivalent
 */
function dec2Roman( x, { mode = 'ibar' } = {} ) {
  x = +x
  if ( Number.isNaN( x ) || x <= 0 )
    throw new Error( 'Must be non-zero, positive integer' )
  if ( !symbols[mode] )
    throw new Error( 'Bad mode' )

  return converters[mode]( x )
}


module.exports = {
  dec2Roman,
}

