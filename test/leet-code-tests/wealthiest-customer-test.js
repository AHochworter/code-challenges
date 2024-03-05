import maximumWealth from '../../src/leet-code-prompts/wealthiest-customer.js';
import { expect } from 'chai';

describe('maximumWealth', () => {
  it('should be a function', () => {
    expect(maximumWealth).to.be.a('function');
  });

  it('should return the wealthiest customer', () => {
    const accounts = [
      [1, 2, 3],
      [3, 2, 1],
    ];
    const result = maximumWealth(accounts);
    console.log('accounts', accounts);
    expect(result).to.equal(6);
  });
});
