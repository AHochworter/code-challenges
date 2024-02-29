import sumEvenNumbers from '../../src/ai-prompts/sumEvenNumbers.js';
import { expect } from 'chai';

describe('sumEvenNumbers', () => {
  it('should be a function', () => {
    expect(sumEvenNumbers).to.be.a('function');
  });
});
