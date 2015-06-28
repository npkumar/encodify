Encodify
=========

A small library providing utility methods to encode and decode to various code formats

[![NPM](https://nodei.co/npm/encodify.png)](https://npmjs.org/package/encodify)
## Installation

  npm install encodify --save

## Usage

    var encodify = require('encodify');

	// Convert to Pig Latin Script
    encodify.toPigLatin('glove').should.eql('oveglay');

	// Convert to Roman Numeral
    encodify.toRomanNumeral(55).should.eql('XXXXXV');

	// Convert to NATO Code - French and German currently supported
    encodify.toNATOCode('CODE').should.eql('Charlie Oscar Delta Echo');
    encodify.toNATOCode('code', 'German').should.eql('Cäsar Otto Dora Emil');
    encodify.toNATOCode('C.O D@E', 'FRENCH').should.eql('Célestin point Oscar espace Désiré arobase Eugène');

	// Convert to list of Anagrams
	encodify.toAnagrams('cod').should.eql(['cod', 'cdo', 'ocd', 'odc', 'dco', 'doc']);
	encodify.toAnagrams('%*!').should.eql(['%*!', '%!*', '*%!', '*!%', '!%*', '!*%']);

  // Convert to Spinal Case
    encodify.toSpinalCase('thisIsSpinalTap').should.eql('this-is-spinal-tap');
    encodify.toSpinalCase('This Is Spinal Tap').should.eql('this-is-spinal-tap');
    encodify.toSpinalCase('The_Andy_Griffith_Show').should.eql('the-andy-griffith-show');
## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release
