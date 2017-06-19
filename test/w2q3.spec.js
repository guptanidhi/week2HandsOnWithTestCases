let expect = require('chai').expect;
let index = require('../Solutions/w2q3');

describe("Question 3 - Test code for correct output", function(){
	var objArray = [ 101, 23, -5, 31, 46, 6, 59 ];
	it('Matches the desired output', function(done){	
		expect(index).to.deep.equal(objArray);
		done();
	})
})