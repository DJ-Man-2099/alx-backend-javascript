const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');
describe('Calculate Number', () => {
  it('ADD with edge cases', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    expect(calculateNumber('SUM', 1.2, 3)).to.equal(4);
    expect(calculateNumber('SUM', 1.7, 3)).to.equal(5);
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUM', 1.49999999999, 3.399999999)).to.equal(4);
  });
  it('SUBTRACT with edge cases', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 1.2, 3)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 1.7, 3)).to.equal(-1);
    expect(calculateNumber('SUBTRACT', 1.49999999999, 3.399999999)).to.equal(-2);
  });
  it('DIVIDE with edge cases', () => {
    expect(calculateNumber('DIVIDE', 3, 1)).to.equal(3);
    expect(calculateNumber('DIVIDE', 1.2, 3)).to.equal(0.333333333333333333);
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 3, 1.7)).to.equal(1.5);
    expect(calculateNumber('DIVIDE', 3.599999999, 1.49999999999)).to.equal(4);
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 3.599999999, 0.39999999999)).to.equal('Error');
  });
});
