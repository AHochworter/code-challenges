import isPalindrome from '../../src/ai-prompts/isPalindrome.js';
import { expect } from 'chai';

describe('isPalindrome', () => {
  it('should be a function', () => {
    expect(isPalindrome).to.be.a('function');
  });
});
