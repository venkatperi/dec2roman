const assert = require( 'assert' );
const { dec2Roman } = require( '../index' )

const values = {
  '1': 'I', '15': 'XV', '70': 'LXX', '1000': 'M',
  '2': 'II', '16': 'XVI', '80': 'LXXX', '1001': 'MI',
  '3': 'III', '17': 'XVII', '90': 'XC', '1002': 'MII',
  '4': 'IV', '18': 'XVIII', '100': 'C', '1003': 'MIII',
  '5': 'V', '19': 'XIX', '101': 'CI', '1900': 'MCM',
  '6': 'VI', '20': 'XX', '102': 'CII', '2000': 'MM',
  '7': 'VII', '21': 'XXI', '200': 'CC', '2001': 'MMI',
  '8': 'VIII', '22': 'XXII', '300': 'CCC', '2002': 'MMII',
  '9': 'IX', '23': 'XXIII', '400': 'CD', '2100': 'MMC',
  '10': 'X', '24': 'XXIV', '500': 'D', '3000': 'MMM',
  '11': 'XI', '30': 'XXX', '600': 'DC',
  '12': 'XII', '40': 'XL', '700': 'DCC',
  '13': 'XIII', '50': 'L', '800': 'DCCC',
  '14': 'XIV', '60': 'LX', '900': 'CM',
}

describe( 'decimal to roman', () => {
  for ( let d in values ) {
    const r = values[d]
    it( `${d} -> ${r}`, () => assert.equal( dec2Roman( Number( d ) ), r ) )
  }
} )
