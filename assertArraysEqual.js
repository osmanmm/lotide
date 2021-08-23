const assertEqual = require('./assertEqual');
const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
    
      assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), true);
    
  };
  