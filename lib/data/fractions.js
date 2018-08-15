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

const Fraction = require( 'fraction.js' )
const { twelfth } = require( '../util' )

const fractionRegex = /^S?-?={0,2}$/

const fractions = [
  '', //0
  '-', //1/12
  '=', //2/12 or 1/6
  '-=', //3/12ths or 1/4
  '==', //4/12ths or 1/3
  '-==', //5/12ths
  'S', //1/2
  'S-', //1/2 plus 1/12th or 7/12ths
  'S=', //1/2 plus 2/12ths or 2/3
  'S-=', //1/2 plus 3/12ths or 3/4
  'S==', //1/2 plus 4/12ths or 5/6
  'S-==', //1/2 plus 5/12ths or 11/12ths
]


const sorted = [
  'S-==', '-==', 'S-=', 'S==', '-=', '==', 'S-', 'S=',
  'S', '-', '=', '']

const values = {
  // '': { n: 0, d: 12 },
  '-': { n: 1, d: 12 },
  '=': { n: 2, d: 12 },
  '-=': { n: 3, d: 12 },
  '==': { n: 4, d: 12 },
  '-==': { n: 5, d: 12 },
  S: { n: 6, d: 12 },
  'S-': { n: 7, d: 12 },
  'S=': { n: 8, d: 12 },
  'S-=': { n: 9, d: 12 },
  'S==': { n: 10, d: 12 },
  'S-==': { n: 11, d: 12 },
}

const isFraction = x => fractionRegex.test( x )

const find = val => {
  val = val.toUpperCase()
  let idx = sorted.find( x => val.startsWith( x ) )
  if ( !idx )
    throw new Error( `${val} is not a roman fraction` )
  return idx
}
const d2rf = x => fractions[twelfth( x )]

const r2df = val => new Fraction( values[find( val )] )

module.exports = {
  d2rf,
  r2df,
  isFraction,
  fractions,
}


