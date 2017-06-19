/*Q9: Write a program in such a way when given an array of integer, 
	return true if the value 4 appears in the array exactly 3 times, 
	and no 4's are next to each other.
	Input: [4,3,6,9,4,8,3,5,8,4];
	Output: true
*/

var numberArray = [4,3,6,9,4,8,3,5,8,4];
var count = 0;
var temp;
var isTrue;
console.log("Input Array", numberArray);
for(var i=0;i<numberArray.length;i++){
	if(temp === undefined){
		temp = numberArray[i];
	}
	
	if(numberArray[i] == 4){
		if(i==0){
			count++;
		}
		if(temp != numberArray[i]){
			count++;
		}
	}
	temp = numberArray[i];
}
console.log("Count "+count);
if(count == 3){
	isTrue = "true";
}else{
	isTrue = "false";
}
console.log(isTrue);
module.exports = isTrue;