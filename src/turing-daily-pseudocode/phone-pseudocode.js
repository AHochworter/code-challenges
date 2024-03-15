// Practice planning out how you would approach your code to pass the tests listed in the tests.js file. Your planning process should include thorough pseudocode.

function createPhone(phoneNumber, contacts) {
  console.log('phoneNumber:', phoneNumber);
  console.log('contacts:', contacts);
  let phone = {
    number: phoneNumber,
    contacts: contacts,
    call: function (contactName) {
      for (let i = 0; i <= contacts.length; i++) {
        if (contactName === contacts[i]) {
          return `Calling ${contactName}...`;
        }
      }
      return `Unknown User: ${contactName}`;
    },
  };
  return phone;
}

export default createPhone;
