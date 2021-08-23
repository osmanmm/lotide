const {assert} = require('chai');
const middle   = require('../middle');
describe("#middle", () => {
    it("returns [Lighthouse] for Hello, Lighthouse, Labs", () => {
        assert.strictEqual(middle(["Hello", "Lighthouse", "Labs"]), "Lighthouse");
    });
    it("returns [2] for [1, 2, 3]", () => {
        assert.strictEqual(middle([1, 2, 3]), 2);
      });
});