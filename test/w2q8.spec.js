let expect = require('chai').expect;
let index = require('../Solutions/w2q8');

describe("Question 8 - Test code for correct output", function(){
	var letterPositionString = 'H=[0],e=[1],l=[2,3,9],o=[4,7],W=[6],r=[8],d=[10]';
	it('Matches the desired output', function(done){	
		expect(index).to.equal(letterPositionString);
		done();
	})
})