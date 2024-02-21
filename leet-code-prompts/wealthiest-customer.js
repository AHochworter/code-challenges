/*You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the ith customer has in the jth bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.


Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.

Pseudocode:
GOAL-> Return the wealth that the richest customer has.
INPUT -> an array of arrays
OUTPUT -> a number
HOW -> 
1. Iterate through the array of arrays
2. For each array, add the numbers in the array together
3. Return the highest number
METHOD -> map first?  Need to sum each inner array, so this first step each inner array should have a number/sum

*/
const accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

var maximumWealth = function (accounts) {
  console.log('accounts', accounts);
  let addedArray = accounts.map(account => {
    return account.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  });
  return addedArray.sort((a, b) => {
    a - b;
  });
  //now sort highest to lowest and return the 1st element of the addedArray
};

console.log(maximumWealth(accounts));
