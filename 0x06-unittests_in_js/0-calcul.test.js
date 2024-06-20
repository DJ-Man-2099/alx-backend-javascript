var assert = require('assert');
var calculateNumber = require("./0-calcul.js");
describe('Calculate Number', () => {
  it('should return 4', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return 2', () => {
    assert.strictEqual(calculateNumber(-1.2, 3), 2);
  });
  it('should return 5', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should return 5', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('should return 6', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('should return 5', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
