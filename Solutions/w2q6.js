/*Q6: Write a program to accept 10 numbers and 
	find the duplicate values of an array of integer values.
	Input: [1,2,3,4,1,3,4,5,6,7,8]
	Output: [1,3,4]  
*/

const array = [1,2,3,4,1,3,4,5,6,7,8];
console.log("Input Array: ", array);
 
var duplicateElementArray = [];
for(var i=0;i<array.length;i++){
	for(var j=i+1;j<array.length;j++){
		if(array[i] == array[j]){
			duplicateElementArray.push(array[i])
		}
	}
}
console.log("Output Array: ",duplicateElementArray);

module.exports = duplicateElementArray;