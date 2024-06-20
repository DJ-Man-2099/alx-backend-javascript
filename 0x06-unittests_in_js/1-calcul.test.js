const assert = require('assert');
const calculateNumber = require('./1-calcul.js');
describe('Calculate Number', () => {
  it('ADD with edge cases', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    assert.strictEqual(calculateNumber('SUM', 1.2, 3), 4);
    assert.strictEqual(calculateNumber('SUM', 1.7, 3), 5);
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', 1.49999999999, 3.399999999), 4);
  });
  it('SUBTRACT with edge cases', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), 2);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3), 2);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.7, 3), 1);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.49999999999, 3.399999999), 2);
  });
  it('DIVIDE with edge cases', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 3, 1), 3);
    assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3), 0.333333333333333333);
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 3, 1.7), 1.5);
    assert.strictEqual(calculateNumber('DIVIDE', 3.599999999, 1.49999999999), 4);
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 3.599999999, 0.39999999999), 'Error');
  });
});
