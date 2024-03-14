import {
  getRNA,
  getRNA2,
} from '../../src/turing-daily-pseudocode/dna-pseudocode.js';
import { expect } from 'chai';

describe('getRNA', () => {
  it('should be a function', () => {
    expect(getRNA).to.be.a('function');
  });
  it('getRNA2 should also be a function', () => {
    expect(getRNA2).to.be.a('function');
  });
  it('should convert a dna sequence to an rna sequence', () => {
    let string = 'GCAT';
    let results = getRNA(string);
    expect(results).to.equal('GCAU');
  });
  it('should convert a dna string to an array, then to an rna sequence, then back to a string', () => {
    let dnaString = 'GCAT';
    let arrayTry = getRNA2(dnaString);
    expect(arrayTry).to.equal('GCAU');
  });
});
