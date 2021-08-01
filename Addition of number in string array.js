In XYZ country there is rule that car’s engine no. depends upon car’ number plate. Engine no is sum of all the integers present on car’s Number plate.The issuing authority has hired you in order to provide engine no. to the cars.Your task is to develop an algorithm which takes input as in form of string(Number plate) and gives back
Engine number.
Input Description:
You are given a string ’s’
Output Description:
Print the engine number
Sample Input :
HR05-AA-2669
Sample Output :
28
Code:
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {
  var str=userInput[0].split("");
  var add=0;
  for(var i=0;i<str.length;i++){
      if(str[i].charCodeAt(0)>=48&&str[i].charCodeAt(0)<=57){
          add=parseInt(add)+parseInt(str[i]);
      }
  }
console.log(add);
});