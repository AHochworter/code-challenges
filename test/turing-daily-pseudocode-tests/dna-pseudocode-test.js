import getRNA from '../../src/turing-daily-pseudocode/dna-pseudocode.js';
import { expect } from 'chai';

describe('getRNA', () => {
  it('should be a function', () => {
    expect(getRNA).to.be.a('function');
  });
  it('should convert a dna sequence to an rna sequence', () => {
    let string = 'GCAT';
    let results = getRNA(string);
    expect(results).to.equal('GCAU');
  });
});
