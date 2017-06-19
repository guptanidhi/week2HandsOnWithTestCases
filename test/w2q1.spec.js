let expect = require('chai').expect;
let index = require('../Solutions/w2q1');

describe("Question 1 - Test code for correct output", function(){
	
	var ascendingArray = [ 'Apple', 'Ball', 'Cat', 'Dog', 'Elephant', 'Fish', 'Zebra' ];
	var descendingArray = [ 'Zebra', 'Fish', 'Elephant', 'Dog', 'Cat', 'Ball', 'Apple' ];
	
	it('Matches the desired array should be in ascending order', function(done){	
		expect(index[0]).to.deep.equal(ascendingArray);
		done();
	})

	it('Matches the desired array should be in descending order', function(done){	
		expect(index[1]).to.deep.equal(descendingArray);
		done();
	})
})