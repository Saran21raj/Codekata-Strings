Given a string S, print 'yes' if it has a vowel in it else print 'no'.
Sample Testcase :
INPUT
codekata
OUTPUT
yes
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
  var vow=str.filter(function(val){
      if(val=="a"||val=="A"||val=="e"||val=="E"||val=="i"||val=="I"||val=="o"||val=="O"||val=="u"||val=="U"){
          return true;
      }
  })
  if(vow.length>=1){
      console.log("yes");
  }
  else{
      console.log("no");
  }
});