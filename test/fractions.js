const assert = require( 'assert' );
const { twelfth } = require( '../lib/util' )
const { d2rf, fractions } = require( '../lib/data/fractions' )

describe( 'fractions', () => {
  for ( let i = 0; i < 12; i++ ) {
    let x = i / 12
    it( `${x} == ${i} twelfths`, function () {
      assert.equal( twelfth( x ), i )
    } )
    it( `fraction ${i}/12 == ${fractions[i]}`, function () {
      assert.equal( d2rf( x ), fractions[i] )
    } )
  }
} )
