/*Q3: Write a program to insert values in an array and remove all 5 from it. Make sure to write separate functions for adding and removing data from array and also have a constructor.
	Input: { Array: [ 101, 5, 23, -5, 31, 46, 5, 5, 6, 59, 5 ] }
	Output: { Array: [ 101, 23, -5, 31, 46, 6, 59 ] }  
*/

class MyData {
	constructor() {
		this.Array = [];
	}
	add(data) {
		this.Array.push(data);
	}
	remove(data) {
		this.Array = this.Array.filter(current => current !== data);
	}
}
 
const Obj = new MyData();
Obj.add(101);
Obj.add(5);
Obj.add(23);
Obj.add(-5);
Obj.add(31);
Obj.add(46);
Obj.add(5);
Obj.add(5);
Obj.add(6);
Obj.add(59);
Obj.add(5);
console.log("Original Array:", Obj.Array);
Obj.remove(5);
console.log("Modified Array:", Obj.Array);

module.exports = Obj.Array;


