/*Q7: Write a program to accept any array of  ten integers,
 	a. If the number is non-prime number add 10 to it, and replace the number
	b. If it is prime do not change the number.
 	Input : [4,5,10,11,14,17,18,19,21,23]
	Output :  [14,5,20,11,24,17,28,19,31,23]  
*/

var array = [4,5,10,11,14,17,18,19,21,23];
var newArray = [];
console.log("Input Array: ", array);
 
for(var i=0;i<array.length;i++){
	var isPrime = true;
	for(var j = 2; j < array[i]; j++){
		if(array[i] % j === 0){
			isPrime = false;
			newArray.push(array[i]+10);
			break;
    }
	}
	if(isPrime)
		newArray.push(array[i]);
}
console.log("Output Array: ", newArray);

module.exports = newArray;