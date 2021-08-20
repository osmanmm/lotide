//const assertEqual = require('../assertEqual');

const assert = require('chai').assert;
const tail   = require('../tail');
describe("#tail", () => {
    it("returns Lighthouse, Labs for [Hello, Lighthouse, Labs]", () => {
        assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
    });
    it("returns 1,2 for [1, 2, 3]", () => {
        assert.deepEqual(tail([1, 2, 3]), [2,3]);
      });
      it("returns [] for [Lighthouse]", () => {
        assert.deepEqual(tail(["Lighthouse"]), []);
    });
});