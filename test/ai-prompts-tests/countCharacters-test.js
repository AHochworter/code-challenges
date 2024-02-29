import countCharacters from '../../src/ai-prompts/countCharacters.js';
import { expect } from 'chai';

describe('countCharacters', () => {
  it('should be a function', () => {
    expect(countCharacters).to.be.a('function');
  });
});
