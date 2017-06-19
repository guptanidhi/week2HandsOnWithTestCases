let expect = require('chai').expect;
let index = require('../Solutions/w2q7');

describe("Question 7 - Test code for correct output", function(){
	var newArray = [14,5,20,11,24,17,28,19,31,23];
	it('Matches the desired output', function(done){	
		expect(index).to.deep.equal(newArray);
		done();
	})
})