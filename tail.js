const assertEqual = require('./assertEqual');
  const tail = function(arr){
    return arr.slice(1);
  }
const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result, ["Lighthouse", "Labs"]);
console.log(result);

module.exports = tail;