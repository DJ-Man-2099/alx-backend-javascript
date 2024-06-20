const assert = require('assert');
const calculateNumber = require('./0-calcul.js');
describe('Calculate Number', function () {
  it('should return 4', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);

    assert.strictEqual(calculateNumber(1, 3.7), 5);

    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
