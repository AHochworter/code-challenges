import summation from '../../src/turing-daily-pseudocode/summation.js';
import { expect } from 'chai';

describe('summation', () => {
  it('should be a function', () => {
    expect(summation).to.be.a('function');
  });
  it('should return the summation of every number from 1 upto num', () => {
    const result = summation(4);
    console.log('results', result);
    expect(result).to.equal(10);
  });
});
