/*
Instructions:
A palindrome is any number, word, or phrase that reads the same forward as it does backward. In this challenge, we are going to focus on palindromic numbers. For example, 12321 is a palindromic number, whereas 123 is not.

Your goal is to write a method/function that takes in an integer and returns the next palindrome. It is safe to assume you are working with only whole numbers, no decimals, and no negatives.

Example:
    findNextPalindrome(100)
    => 101

    findNextPalindrome(101)
    => 111

PSEUDOCODE:
GOAL: Write a function that takes an integer and returns the next possible palindrome. 
INPUT: Integer
OUTPUT: Integer
HOW: Add 1 to the parameter/agrument. Compare the foward to the reverse, if they're the same, return the integer.  If not, add 1 and check again. 

METHODS:
    
*/
let num = 102;

//This solution uses a recursive call back to findNextPalindrome
const findNextPalindrome = num => {
  //convert the number to a string, then split it into an array
  const nextPalindrome = num.toString().split('');
  console.log('nextPalindrome', nextPalindrome);
  //reverse the array and join it back into a string
  const reversed = nextPalindrome.slice().reverse().join('');
  console.log('reversed', reversed);
  //compare the original string to the reversed string
  if (num.toString() === reversed) {
    return `The Next Palindrome is ${num}`;
  } else {
    return findNextPalindrome(num + 1);
  }
};

console.log(findNextPalindrome(num));

//Adrian used a for loop
// const findNextPalindromeLoop = num => {
//   let newNum = num + 1;
//   for (let i = 0; i < 10000; i++) {
//     console.log(newNum);
//     console.log(newNum.toString().split('').reverse().join(''));

//     if (newNum.toString() === newNum.toString().split('').reverse().join('')) {
//       return `the next palindrome is ${newNum}`;
//     }
//     newNum = newNum + 1;
//     console.log('newNum', newNum);
//   }
// };

// console.log(findNextPalindromeLoop(101));
