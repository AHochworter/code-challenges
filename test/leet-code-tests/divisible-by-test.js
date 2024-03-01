import divisibleBy from '../../src/leet-code-prompts/divisible-by.js';
import { expect } from 'chai';

describe('divisibleBy', () => {
  it('should be a function', () => {
    expect(divisibleBy).to.be.a('function');
  });
  it('should return an array of numbers that are divisible by the given divisor', () => {
    let numbers = [1, 2, 3, 4, 5, 6];
    let divisor = 2;
    // console.log(numbers);
    // console.log(divisor);
    const results = divisibleBy(numbers, divisor);

    expect(results).to.deep.equal([2, 4, 6]);
  });
});
