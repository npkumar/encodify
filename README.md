Encodify [![Build Status](https://travis-ci.org/npkumar/encodify.svg?branch=master)](https://travis-ci.org/npkumar/encodify)
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

    // Convert to Morse Code
    encodify.toMorseCode('secret').should.eql('... . -.-. .-. . -');
    encodify.toMorseCode('b.o@nd').should.eql('-... .-.-.- --- .--.-. -. -..');
    encodify.toMorseCode('NPK').should.eql('-. .--. -.-');

    // Convert to list of Anagrams
    encodify.toAnagrams('cod').should.eql(['cod', 'cdo', 'ocd', 'odc', 'dco', 'doc']);
    encodify.toAnagrams('%*!').should.eql(['%*!', '%!*', '*%!', '*!%', '!%*', '!*%']);

    // Convert to Spinal Case
    encodify.toSpinalCase('thisIsSpinalTap').should.eql('this-is-spinal-tap');
    encodify.toSpinalCase('This Is Spinal Tap').should.eql('this-is-spinal-tap');
    encodify.toSpinalCase('The_Andy_Griffith_Show').should.eql('the-andy-griffith-show');

    // Convert to Fibonacci Series
    encodify.toFibonacci(10).should.eql([ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]);
    encodify.toFibonacci(3.9).should.eql([ 1, 1, 2 ]);

    // Convert to Base DNA Pair
    encodify.toDNABasePair('GGCC').should.eql('CCGG');
    encodify.toDNABasePair('GaTcAatagc').should.eql('CTAGTTATCG');

    // Convert to list of Prime numbers upto given specified number
    encodify.toPrimes(10).should.eql([2, 3, 5, 7]);
    encodify.toPrimes(30.97).should.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);

    // Calculate LCM of all values in an array
    encodify.toLCM([330, 65, 15]).should.eql(4290);
    encodify.toLCM([330, 90, 65, 55, 20, 15]).should.eql(25740);

    // Calculate GCD of all values in an array
    encodify.toGCD([45, 60, 330]).should.eql(15);
    encodify.toGCD([25, 45, 60, 115, 330]).should.eql(5);

    // Convert to flattened array from any multi dimensional array of varying level of nesting
    encodify.toFlattenedArray([1, [], [3, [[4]]]]).should.eql([1, 3, 4]);
    encodify.toFlattenedArray([1, [5, [6, [7, 8, [9]]]], [3, [[4]]]]).should.eql([1, 5, 6, 7, 8, 9, 3, 4]);
    
## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code. Feel free to add more conversions!

## Release History

* 0.1.0 Initial release
