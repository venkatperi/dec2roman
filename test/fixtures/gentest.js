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

const { dec2Roman } = require( '../../index' )

let step = 1
let prevStep = 1
let emit = i => console.log( `'${i}': '${dec2Roman( i, { mode: 'no_ext' } )}',` )
// let emit = ( ...args ) => console.log( ...args )

for ( let i = 1; i < 4000000; i += step ) {
  step = Math.pow( 10, Math.ceil( Math.log10( i + step ) - 1 ) )
  emit( i )
  if ( step !== prevStep ) {
    for ( let j = 1; j <= 2; j++ ) {
      emit( i + prevStep * j )
    }
    prevStep = step
  }
}
