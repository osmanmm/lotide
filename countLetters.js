const countLetters = function(str) {
    let letterCount = {};
    for (let char of str) {
      debugger;
      if (letterCount[char]) {
        letterCount[char] += 1;
      } else {
        letterCount[char] = 1;
      } 
    };
    console.log(letterCount);
    return letterCount;
  };
module.exports = countLetters;