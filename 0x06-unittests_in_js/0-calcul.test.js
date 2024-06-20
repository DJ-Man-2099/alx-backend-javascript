var assert = require('assert');
var calculateNumber = require("./0-calcul.js");
describe('Calculate Number', () => {
  it('should return 4', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('should return 5', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('should return 5', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('should return 6', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
