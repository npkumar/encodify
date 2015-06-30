var should = require('should'),
	encodify = require('../index');

describe('#toPigLatin', function() {
	it('should convert to Pig Latin', function(done) {
		encodify.toPigLatin('california').should.eql('aliforniacay');
		encodify.toPigLatin('glove').should.eql('oveglay');
		encodify.toPigLatin('algorithm').should.eql('algorithmway');
		done();
	});

	it('should not convert to Pig Latin', function(done) {
		encodify.toPigLatin(100).should.eql(100);
		encodify.toPigLatin({}).should.eql({});
		encodify.toPigLatin([]).should.eql([]);
		done();
	});
});

describe('#toRomanNumeral', function() {
	it('should convert to Roman Numeral', function(done) {
		encodify.toRomanNumeral(29).should.eql('XXIX');
		encodify.toRomanNumeral(16).should.eql('XVI');
		encodify.toRomanNumeral(55).should.eql('XXXXXV');
		done();
	});

	it('should not convert to Roman Numeral', function(done) {
		encodify.toRomanNumeral('foobar').should.eql('foobar');
		encodify.toRomanNumeral(9.87).should.eql(9.87);
		encodify.toRomanNumeral({}).should.eql({});
		encodify.toRomanNumeral([]).should.eql([]);
		done();
	});
});

describe('#toNATOCode', function() {
	it('should convert to toNATOCode', function(done) {
		encodify.toNATOCode('CODE').should.eql('Charlie Oscar Delta Echo');
		encodify.toNATOCode('CoDe').should.eql('Charlie Oscar Delta Echo');
		encodify.toNATOCode('code', 'German').should.eql('Cäsar Otto Dora Emil');
		encodify.toNATOCode('code', 'german').should.eql('Cäsar Otto Dora Emil');
		encodify.toNATOCode('code', 'FRENCH').should.eql('Célestin Oscar Désiré Eugène');
		encodify.toNATOCode('C.O D@E').should.eql('Charlie dot Oscar space Delta at Echo');
		encodify.toNATOCode('C.O D@E', 'FRENCH').should.eql('Célestin point Oscar espace Désiré arobase Eugène');
		done();
	});

	it('should not convert to Nato Code', function(done) {
		encodify.toNATOCode('code', 'foobar').should.eql('Charlie Oscar Delta Echo');
		encodify.toNATOCode('').should.eql('');
		encodify.toNATOCode(9.87).should.eql(9.87);
		encodify.toNATOCode({}).should.eql({});
		encodify.toNATOCode([]).should.eql([]);
		done();
	});
});

describe('#toAnagrams', function() {
	it('should convert to toAnagrams', function(done) {
		encodify.toAnagrams('cod').should.eql(['cod', 'cdo', 'ocd', 'odc', 'dco', 'doc']);
		encodify.toAnagrams('%*!').should.eql(['%*!', '%!*', '*%!', '*!%', '!%*', '!*%']);
		done();
	});
});

describe('#toSpinalCase', function() {
	it('should convert to spinalCase', function(done) {
		encodify.toSpinalCase('thisIsSpinalTap').should.eql('this-is-spinal-tap');
		encodify.toSpinalCase('This Is Spinal Tap').should.eql('this-is-spinal-tap');
		encodify.toSpinalCase('The_Andy_Griffith_Show').should.eql('the-andy-griffith-show');
		done();
	});
});


describe('#toFibonacci', function() {
	it('should convert to Fibonacci Series', function(done) {
		encodify.toFibonacci(10).should.eql([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
		encodify.toFibonacci(3.9).should.eql([1, 1, 2]);
		done();
	});

	it('should not convert to Fibonacci Series', function(done) {
		encodify.toFibonacci('foobar').should.eql([]);
		encodify.toFibonacci(-1).should.eql([]);
		encodify.toFibonacci().should.eql([]);
		done();
	});
});

describe('#toDNABasePair', function() {
	it('should convert to DNABasePair', function(done) {
		encodify.toDNABasePair('atcg').should.eql('TAGC');
		encodify.toDNABasePair('GGCC').should.eql('CCGG');
		encodify.toDNABasePair('GaTcAatagc').should.eql('CTAGTTATCG');
		encodify.toDNABasePair('abcdefeghi').should.eql('TBGDEFECHI');
		done();
	});
});

describe('#toPrimes', function() {
	it('should convert to Primes', function(done) {
		encodify.toPrimes(1).should.eql([]);
		encodify.toPrimes(2).should.eql([2]);
		encodify.toPrimes(7).should.eql([2, 3, 5, 7]);
		encodify.toPrimes(10).should.eql([2, 3, 5, 7]);
		encodify.toPrimes(30.97).should.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
		encodify.toPrimes(50).should.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
		done();
	});

	it('should not convert to Primes', function(done) {
		encodify.toPrimes(-1).should.eql([]);
		encodify.toPrimes(0).should.eql([]);
		encodify.toPrimes('foobar').should.eql([]);
		encodify.toPrimes().should.eql([]);
		done();
	});
});

describe('#toLCM', function() {
	it('should convert to LCM', function(done) {
		encodify.toLCM([24, 60]).should.eql(120);
		encodify.toLCM([1, 2, 3, 4, 5]).should.eql(60);
		encodify.toLCM([330, 65, 15]).should.eql(4290);
		encodify.toLCM([330, 90, 65, 55, 20, 15]).should.eql(25740);
		encodify.toLCM([330, 'dummy', null, 65, 15]).should.eql(4290);
		done();
	});
});

describe('#toGCD', function() {
	it('should convert to GCD', function(done) {
		encodify.toGCD([24, 60]).should.eql(12);
		encodify.toGCD([45, 60, 330]).should.eql(15);
		encodify.toGCD([25, 45, 60, 115, 330]).should.eql(5);
		encodify.toGCD([45, 60, [], 330, 'foobar']).should.eql(15);
		done();
	});
});

describe('#toMorseCode', function() {
	it('should convert to Morse Code', function(done) {
		encodify.toMorseCode('secret').should.eql('... . -.-. .-. . -');
		encodify.toMorseCode('b.o@nd').should.eql('-... .-.-.- --- .--.-. -. -..');
		encodify.toMorseCode('NPK').should.eql('-. .--. -.-');
		encodify.toMorseCode('Attack!').should.eql('.- - - .- -.-. -.- -.-.--');
		done();
	});

	it('should not convert to Morse Code', function(done) {
		encodify.toMorseCode().should.eql('');
		encodify.toMorseCode([]).should.eql('');
		done();
	});
});