let expect = require('chai').expect;
let index = require('../Solutions/w2q9');

describe("Question 9 - Test code for correct output", function(){
	it('Matches the desired output', function(done){	
		expect(index).to.deep.equal("true");
		done();
	})
})