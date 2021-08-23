// const without = function(source, itemsToRemove) {
//     for (let i = 0; i < source.length; i++) {
//       for (let j = 0; j < itemsToRemove.length; j++) {
//         if (source[i] === itemsToRemove[j]) {
//           source.splice(i, 1);
//         }
//       }
//     }
//     return source;
//   };
const without = function(array1, array2) {
  let filteredArray = [];
  for (const element of array1) {
    if (!array2.includes(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};
  module.exports = without;