import isAnagram from '../../src/ai-prompts/isAnagram.js';
import { expect } from 'chai';

describe('isAnagram', () => {
  it('should be a function', () => {
    expect(isAnagram).to.be.a('function');
  });
});
