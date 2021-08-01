Given a string 'S' print the sum of weight of the String. A weight of character is defined as the ASCII value of corresponding character.
Input Description:
You are given a string ‘s’
Output Description:
Print weight
Sample Input :
abc
Sample Output :
294

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
  var asciiadd=0;
  for(var i=0;i<str.length;i++){
      asciiadd=parseInt(asciiadd)+parseInt(str[i].charCodeAt(0));
  }
console.log(asciiadd);
});