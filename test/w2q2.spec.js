let expect = require('chai').expect;
let index = require('../Solutions/w2q2');

describe("Question 2 - Test code for correct output", function(){
	var objArray = ['1','2','3','4'];
	it('Matches the desired output', function(done){	
		expect(index).to.deep.equal(objArray);
		done();
	})
})