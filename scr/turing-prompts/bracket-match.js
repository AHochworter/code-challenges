/* Create a method/function that will intake a set of brackets [ { ( as a string and determine if the brackets are well-formed (match). Brackets can be nested. 

Examples:
bracket('{}')
// => true

bracket('{()}')
// => true

bracket('({[]}{[]})') 
// => true

bracket('{(')
// => false

bracket('{[)][]}')
// => false

bracket(']')
// => false

Pseudocode:
Understand: Determine if each opening bracket has a matching closing bracket, return boolean of true or false.
Match: 
Plan: 
  If the bracket is an opening bracket, push it to the stack.
  Can use a for loop to iterate through the string.
  Push to empty array IF it's an opening bracket

*/

const doBracketsMatch = bracketString => {
  console.log(bracketString);

  let bracketStack = [];

  for (let i = 0; i < bracketString.length; i++) {
    console.log('bracketStringLength ', bracketString.length);

    if (
      bracketString[i] === '(' ||
      bracketString[i] === '{' ||
      bracketString[i] === '['
    ) {
      bracketStack.push(bracketString[i]);
      console.log('bracketStack', bracketStack);
    } else {
      if (bracketStack === 0) {
        return false;
      }

      let lastBracket = bracketStack.pop();
      console.log('lastBracket', lastBracket);

      if (
        (lastBracket === '[' && bracketString[i] === ']') ||
        (lastBracket === '(' && bracketString[i] === ')') ||
        (lastBracket === '{' && bracketString === '}')
      ) {
        console.log('HERE true');
        return true;
      } else {
        return false;
      }
    }
    console.log('MADE it through');
    // return true
  }
  console.log('out of the loop');
};

console.log(doBracketsMatch('({[]}{[]})'));
