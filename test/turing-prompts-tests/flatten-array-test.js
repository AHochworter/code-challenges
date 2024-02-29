import flattenArray from '../../src/turing-prompts/flatten-array.js';
import { expect } from 'chai';

describe('flattenArray', () => {
  it('should be a function', () => {
    expect(flattenArray).to.be.a('function');
  });
});
