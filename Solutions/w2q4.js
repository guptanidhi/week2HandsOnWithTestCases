/*Q4: Write a program to accept an array of characters and 
	find the number of vowels and consonants and display them in ascending order. 
*/

const charArray = ['e', 'z', 'a', 'j', 'b', 'd', 'f', 'g', 'o'];
var vowelArray = [];
var consonentArray = [];
 
for(var i=0;i<charArray.length;i++){
	if(charArray[i] === 'a' || charArray[i] === 'e' || charArray[i] === 'i' || charArray[i] === 'o' || charArray[i] === 'u' || false){
		vowelArray.push(charArray[i]);
	}else{
		consonentArray.push(charArray[i]);
	}
}
console.log("Input Array: ", charArray);
vowelArray.sort(function(a,b) {
  if ( a < b )
      return -1;
  if ( a > b )
      return 1;
  return 0;
});
console.log("Vowel Array: ", vowelArray);
 
consonentArray.sort(function(a,b) {
  if ( a < b )
      return -1;
  if ( a > b )
      return 1;
  return 0;
});
console.log("Consonent Array: ", consonentArray);

module.exports = [vowelArray, consonentArray];



