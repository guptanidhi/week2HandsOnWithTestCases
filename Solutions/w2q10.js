/*Q10: Write a program that starts with 2 integer arrays, 
	a and b, of any length. 
	Return how many of the arrays have 1 as their first element.
	Input: ({1, 2, 3}, {1, 3})
	Output:  2
 
	Input : ({7, 2, 3}, {1})
	Output : 1  
*/

const a = [[1, 2, 3], [1, 3]];
const b = [[7, 2, 3], [1]];
 
console.log("Input Array: ", a);
var count = 0;
for(var i=0;i<a.length;i++){
	if(a[i][0] == 1){
		count++;
	}
}
console.log("Counting array starting from 1 is", count);

console.log("Input Array: ", b);
count = 0;
for(var i=0;i<b.length;i++){
	if(b[i][0] == 1){
		count++;
	}
}
console.log("Counting array starting from 1 is", count);

module.exports = count;

