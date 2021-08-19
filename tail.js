const assertEqual = require('./assertEqual');
  const tail = function(arr){
    return arr.slice(1);
  }
  
  //assertEqual(1,1);
//   assertEqual("Lighthouse", "Labs");
const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result, ["Lighthouse", "Labs"]);
console.log(result);