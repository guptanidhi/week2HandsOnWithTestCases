/*Q1:  Write a program to sort strings items of an array in both 
	alphabetically ascending and descending order?
*/

var stringArray = ["Apple" ,"Cat", "Ball", "Dog", "Zebra", "Fish", "Elephant"];
console.log("Input Array: ", stringArray);
var ascendingOrderArray = [];
var descendingOrderArray = [];
/*stringArray.sort(function(a,b) {
  if ( a < b )
      return -1;
  if ( a > b )
      return 1;
  return 0;
});*/
console.log("Ascending Order: ", stringArray.sort());
for(var i = 0;i<stringArray.length;i++){
  ascendingOrderArray.push(stringArray[i])
}
stringArray.sort(function(a,b) {
  if ( a < b )
      return 1;
  if ( a > b )
      return -1;
  return 0;
});
console.log("Descending Order: ", stringArray);
descendingOrderArray = stringArray;
/*console.log(ascendingOrderArray)
console.log(descendingOrderArray)*/
module.exports = [ascendingOrderArray, descendingOrderArray]
