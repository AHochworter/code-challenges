/*Find Numbers that are divisible by a given number

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example
Input: [1, 2, 3, 4, 5, 6], 
Output 2 --> [2, 4, 6]

Pseudocode
GOAL -> determine if the numbers in an array are divisible by the given divisor
INPUT -> an array of numbers and the divisor
OUTPUT -> an array of numbers, divisible by the divisor
HOW ->  iterate through the array and check each element for a remainder based on the divisor
METHOD -> filter (based on if there's a remainder)

*/

const divisibleBy = (numbers, divisor) => {
  const isDivisible = numbers.filter(number => {
    return number % divisor === 0;
  });
  return isDivisible;
};

export default divisibleBy;
