/*Q8: Write a program which creates a concordance of characters occurring in a string (i.e., which characters occur where in a string). Read the string from the command line.
 	Input:-  Hello World
	Output : H=[0], e=[1], l=[2, 3, 9], o=[4, 7], W=[6], r=[8], d=[10]  
*/

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('String> ');
rl.prompt();
rl.on('line', function(line) {
	var objArray = {};
  var stringArray = line.split('');
  for(var i=0;i<stringArray.length;i++){
  	if(stringArray[i] == " "){
  		continue;
  	}
  	if(!objArray[stringArray[i]]){
  		objArray[stringArray[i]] = i;
  	}else{
  		objArray[stringArray[i]] = objArray[stringArray[i]] + "," +i
  	}
  }
  var output = "";
  for(var key in objArray){
  	output += ", " +key+"=["+objArray[key]+"]";
  }
  output = output.substr(1);
  console.log("Output>", output);
  rl.close();
}).on('close',function(){
    process.exit(0);
});

// Code for Test case
var str = "Hello World";
var objArray1 = {};
var output1 = "";
var stringArray = str.split('');
for(var i=0;i<stringArray.length;i++){
	if(stringArray[i] == " "){
		continue;
	}
	if(!objArray1[stringArray[i]]){
		objArray1[stringArray[i]] = i;
	}else{
		objArray1[stringArray[i]] = objArray1[stringArray[i]] + "," +i
	}
}
for(var key in objArray1){
	output1 += "," +key+"=["+objArray1[key]+"]";
}
output1 = output1.substr(1);

module.exports = output1;