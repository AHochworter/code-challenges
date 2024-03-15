import createPhone from '../../src/turing-daily-pseudocode/phone-pseudocode.js';
import { expect } from 'chai';

let str = value => {
  return JSON.stringify(value);
};

describe('Phone', () => {
  it('should be a function', () => {
    //asserting that our createPhone is a function
    expect(createPhone).to.be.a('function');
  });
  it('can have a number and a list of contacts', () => {
    var phone = createPhone('9375551234', ['Dawn', 'Kari', 'Courtney']);
    //looks like the first assert is asserting that we have a phone object and that object has a phone.number
    //the second assertion is asserting that our phone object has an array of contacts assigned to phone.contacts
    expect(phone.number).to.equal('9375551234');
    expect(phone.contacts).to.deep.equal(['Dawn', 'Kari', 'Courtney']);
  });

  it('can call someone', () => {
    var phone = createPhone('9375551234', ['Fatima', 'Heather', 'Bruce']);
    // it looks like the create phone is giving us a phone number and an array of contacts.
    //The assertions below refer to our phone object with phone.call and a text message
    expect(phone.call('Bruce')).to.equal('Calling Bruce...');
  });

  it('can only call someone from your contacts', () => {
    var phone = createPhone('9375551234', ['Karim', 'Leah', 'Christy']);
    //error handling, asserting that if a contact doesn't exist in our contacts array a text message of 'Unknown User will be returned
    expect(phone.call('Leah')).to.equal('Calling Leah...');
    expect(phone.call('Jess')).to.equal('Unknown User: Jess');
  });
});
