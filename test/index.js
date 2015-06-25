var should = require('should'),
	encodify = require('../index');

describe('#toPigLatin', function () {
	it('should convert to Pig Latin', function (done) {
		encodify.toPigLatin('california').should.eql('aliforniacay');
		encodify.toPigLatin('glove').should.eql('oveglay');
		encodify.toPigLatin('algorithm').should.eql('algorithmway');
		done();
	});
});
