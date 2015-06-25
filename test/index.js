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
		encodify.toNATOCode('C.O D$E').should.eql('Charlie dot Oscar space Delta undefined Echo');
		encodify.toNATOCode('C.O D$E', 'FRENCH').should.eql('Célestin point Oscar espace Désiré undefined Eugène');
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