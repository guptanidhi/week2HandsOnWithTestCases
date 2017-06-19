let expect = require('chai').expect;
let index = require('../Solutions/w2q6');

describe("Question 6 - Test code for correct output", function(){
	var array = [1,3,4];
	it('Matches the desired output', function(done){	
		expect(index).to.deep.equal(array);
		done();
	})
})