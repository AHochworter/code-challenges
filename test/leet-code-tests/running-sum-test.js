import runningSum from '../../src/leet-code-prompts/running-sum.js';
import { expect } from 'chai';

describe('runningSum', () => {
  it('should calculate the running sum of an array of numbers', () => {
    // let nums = [1, 2, 3, 4];
    const results = runningSum([1, 2, 3, 4]);
    expect(results).to.deep.equal([1, 3, 6, 10]);
  });
});
