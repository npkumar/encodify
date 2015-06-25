var should = require('should'),
	codify = require('../index');

describe('#toPigLatin', function () {
	it('should convert to Pig Latin', function (done) {
		codify.toPigLatin('california').should.eql('aliforniacay');
		codify.toPigLatin('glove').should.eql('oveglay');
		codify.toPigLatin('algorithm').should.eql('algorithmway');
		done();
	});
});