import createPhone from '../../src/turing-daily-pseudocode/phone-pseudocode.js';
import { expect } from 'chai';

let str = value => {
  return JSON.stringify(value);
};

describe('Phone', () => {
  it('should be a function', () => {
    expect(createPhone).to.be.a('function');
  });
  it.skip('can have a number and a list of contacts', () => {
    var phone = createPhone('9375551234', ['Dawn', 'Kari', 'Courtney']);
    //
    assert.equal(phone.number, '9375551234');
    assert.deepEqual(phone.contacts, ['Dawn', 'Kari', 'Courtney']);
  });

  it.skip('can call someone', () => {
    var phone = createPhone('9375551234', ['Fatima', 'Heather', 'Bruce']);
    // it looks like the create phone is
    assert.equal(phone.call('Bruce'), 'Calling Bruce...');
  });

  it.skip('can only call someone from your contacts', () => {
    var phone = createPhone('9375551234', ['Karim', 'Leah', 'Christy']);
    assert.equal(phone.call('Leah'), 'Calling Leah...');
    assert.equal(phone.call('Jess'), 'Unknown User: Jess');
  });
});
