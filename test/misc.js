const assert = require( 'assert' );
const { dec2Roman, roman2Dec } = require( '../index' )

describe( 'misc', () => {
  describe( 'dec2Roman', () => {
    it( 'throws for very long numbers', () => assert.throws( () => dec2Roman( '9999999999999999' ), RangeError ) )
    it( 'throws if not a number', () => assert.throws( () => dec2Roman( 'abc' ) ) )
    it( 'throws if zero', () => assert.throws( () => dec2Roman( 0 ) ) )
    it( 'throws < 0', () => assert.throws( () => dec2Roman( -100 ) ) )
    it( 'throws if mode is bad', () => assert.throws( () => dec2Roman( 100, { mode: 'abc' } ) ) )
  } )
  describe( 'roman2Dec', () => {
    it( 'throws on bad symbol', () => assert.throws( () => roman2Dec( 'U' ) ) )
  } )
} )
