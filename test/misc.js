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

    it( 'throws on bad symbol', () =>
      assert.throws( () => roman2Dec( 'U' ) ) )

    it( 'does not throw on correct value ordering', () =>
      assert.doesNotThrow( () => roman2Dec( 'XV', { strict: true } ) ) )

    it( 'throws on incorrect value ordering', () =>
      assert.throws( () => roman2Dec( 'VX', { strict: true } ) ) )

    it( 'does not throw on concurrent groups three or smaller', () =>
      assert.doesNotThrow( () => roman2Dec( 'XVIII', { strict: true } ) ) )

    it( 'does not throw on concurrent groups <= 3 (vinculum)', () =>
      assert.doesNotThrow( () => roman2Dec( 'M̅M̅M̅M̅M̅C̅C̅C̅III', { strict: true } ) ) )

    it( 'throws on invalid repetition (vinculum)', () =>
      assert.throws( () => roman2Dec( 'V̅V̅V̅', { strict: true } ) ) )

    it( 'throws on concurrent groups larger than three', () =>
      assert.throws( () => roman2Dec( 'XVIIII', { strict: true } ) ) )

    it( 'throws on invalid repetition (LVD)', () =>
      assert.throws( () => roman2Dec( 'MMLLV', { strict: true } ) ) )

    it( 'throws on concurrent groups larger than three (vinculum)', () =>
      assert.throws( () => roman2Dec( 'V̅V̅V̅V̅', { strict: true } ) ) )

  } )
} )
