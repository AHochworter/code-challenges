/*
Write a method/function that starts at 0 and finds the first twenty-five numbers where the number plus its inverse equals a palindrome that is greater than 1,000.

47(number) + 74(inverse) = 121(palindrome) *Note: This does not meet the greater than 1,000 rule.*

Collect the twenty-five numbers in an array as the return value. Be sure to collect the **number** and not the sum.

Pseudocode:
GOAL: Find/return 25 numbers that when the number + it's inverse equal a palindrome.
  i.e. 47
INPUT: number
OUTPUT: array of numbers
HOW:
  -increment by one, then check
    -check to see if the number + its inverse is a palindrome, if yes, 
  -check to see if the palindrome is > 1000, 
    -if yes, add the number to the array
METHODS:
  -while loop (while array.length < 26)
  -increment
  -toString (is there an inverse method for numbers?)
  -split
  -join

*/

const findNums = () => {
  let num = 12;
  let numsArr = [];

  while (numsArr.length < 25) {
    const newNum = num + parseInt(num.toString().split('').reverse().join(''));
    console.log('newNum', newNum);
    if (
      newNum === parseInt(newNum.toString().split('').reverse().join('')) &&
      newNum > 1000
    ) {
      numsArr.push(num);
    }
    num++;
  }
  return numsArr;
};

console.log(findNums());

// const findNumsChat = () => {
//   let num = 0;
//   let numsArr = [];

//   while (numsArr.length < 25) {
//     const numStr = num.toString();
//     const reverseNumStr = numStr.split("").reverse().join("");
//     const newNum = num + parseInt(reverseNumStr);

//     const newNumStr = newNum.toString();
//     const reverseNewNumStr = newNumStr.split("").reverse().join("");

//     if (newNumStr === reverseNewNumStr && newNum > 1000) {
//       numsArr.push(num);
//     }

//     num++;
//   }
//   return numsArr;
// }

// console.log(findNumsChat());
