You are given a string.Your task is to print only the consonants present in the string without affecting the sentence spacings if present. If no consonants are present print -1
Input Description:
You are given a string ‘s’.
Output Description:
Print only consonants.
Sample Input :
I am shrey 
Sample Output :
 m shry
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
  var str=userInput[0].split(" ");
 // console.log(str);
  function vow(val){
      var arr=[];
      
      for(var i=0;i<val.length;i++){
          for(var j=0;j<val[i].length;j++){
      if(val[i][j]!="a"&&val[i][j]!="A"&&val[i][j]!="e"&&val[i][j]!="E"&&val[i][j]!="i"&&val[i][j]!="I"&&val[i][j]!="o"&&val[i][j]!="O"&&val[i][j]!="u"&&val[i][j]!="U"){
          arr.push(val[i][j]);
      }
      
      
    }
    if(i!=val.length-1){
    arr.push(" ")
    }
      }
    return arr.join("");
  }
  console.log(vow(str));
});
