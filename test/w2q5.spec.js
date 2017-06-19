let expect = require('chai').expect;
let index = require('../Solutions/w2q5');

describe("Question 5 - Test code for correct output", function(){
	var array = [1,7];
	it('Matches the desired output', function(done){	
		expect(index).to.deep.equal(array);
		done();
	})
})