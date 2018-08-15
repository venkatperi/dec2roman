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

// Adapted from https://github.com/darkskyapp/binary-search

const binarySearch = ( haystack, needle, comparator, low, high ) => {
  let mid, cmp;

  if ( low === undefined )
    low = 0;
  else {
    low = low | 0;
    if ( low < 0 || low >= haystack.length )
      throw new RangeError( 'invalid lower bound' );
  }

  if ( high === undefined )
    high = haystack.length - 1;
  else {
    high = high | 0;
    if ( high < low || high >= haystack.length )
      throw new RangeError( 'invalid upper bound' );
  }

  while ( low <= high ) {
    /* Note that "(low + high) >>> 1" may overflow, and results in a typecast
     * to double (which gives the wrong results). */
    mid = low + (high - low >> 1);
    cmp = +comparator( haystack[mid], needle, mid, haystack );

    /* Too low. */
    if ( cmp < 0.0 )
      low = mid + 1;

    /* Too high. */
    else if ( cmp > 0.0 )
      high = mid - 1;

    /* Key found. */
    else
      return mid;
  }

  /* Key not found. */
  // return ~low;
  return low;
}

const find = ( arr, ...args ) => arr[binarySearch( arr, ...args )]

const ascending = ( a, b ) => a - b

const descending = ( a, b ) => b - a

module.exports = {
  binarySearch,
  find,
  ascending,
  descending
}
