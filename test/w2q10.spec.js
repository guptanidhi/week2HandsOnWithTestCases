let expect = require('chai').expect;
let index = require('../Solutions/w2q10');

describe("Question 10 - Test code for correct output", function(){
	it('Matches the desired output', function(done){	
		expect(index).to.deep.equal(1);
		done();
	})
})