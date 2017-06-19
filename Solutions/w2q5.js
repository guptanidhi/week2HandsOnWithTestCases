/*Q5: Write a program which starts with 2 int arrays, 
	`a and b`, accept the length `n`. 
	Consider the sum of the values in each array. Return the array which has the largest sum.
	Input:  a=[1,7]  b=[3,4]
	Output:  [1,7]
*/

const a = [1,7], b = [3,4];
const array = [a,b];
const totalSumArray = [];
console.log("Input Array: a = ", a);
console.log("Input Array: b = ", b);
 
for(var j=0;j<array.length;j++){
	var totalSum = 0;
	for(var i=0;i<array[j].length;i++){
		totalSum += array[j][i];
	}
	totalSumArray.push(totalSum);
}
 
var max = totalSumArray[0];
var maxIndex = 0;
for(var i = 1; i < totalSumArray.length; i++) {
  if(totalSumArray[i] > max) {
    maxIndex = i;
    max = totalSumArray[i];
  }
}
console.log("Output Array:", array[maxIndex]);

module.exports = array[maxIndex];