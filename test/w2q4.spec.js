let expect = require('chai').expect;
let index = require('../Solutions/w2q4');

describe("Question 4 - Test code for correct output", function(){
	const vowelArray = [ 'a', 'e', 'o' ];
	const consonentArray = [ 'b', 'd', 'f', 'g', 'j', 'z' ];
	it('Matches the desired output for vowel array', function(done){	
		expect(index[0]).to.deep.equal(vowelArray);
		done();
	})

	it('Matches the desired output for consonent array', function(done){	
		expect(index[1]).to.deep.equal(consonentArray);
		done();
	})
})