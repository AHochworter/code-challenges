/* Instructions
You are given three arrays of equal size. Each array has 1 million RANDOM integer values.

Assume that each array is already sorted in ascending order and that no individual array has any duplicate values.

Your goal is to write a method/function that will return an array of any/all values which are present in all three arrays.

Bonus: Once you’ve found a working solution, try to optimize to run in O(n) time and 1x space complexity.

Small Scale Example Below 

Small Scale Example:
 nums1 = [1, 2, 4, 5, 8]
    nums2 = [2, 3, 5, 7, 9]
    nums3 = [1, 2, 5, 8, 9]
    findMatches(nums1, nums2, nums3)
    => [2, 5]
    

nums = [1,2,3,4]

/* Psuedocode
GOAL: return an array of any/all values which are present in all three arrays.
INPUT: 3 arrays of equal size
  - as variable so that we can iterate over them?
OUTPUT: array of any/all values which are present in all three arrays
HOW: 
- iterate through each array
- compare each value to the other arrays
- return the value if it is present in all arrays (includes)
METHODS:
- filter?  
  - with includes
- reduce?
  - this might work, but feels really thick for the logic
*/

var runningSum = function (nums) {
  let sum = 0;
  console.log('nums', nums);
  const addNums = nums.map(num => {
    return (sum += num);
  });
  return addNums;
};

console.log(runningSum(nums));
nums1 = [1, 2, 4, 5, 8];
nums2 = [2, 3, 5, 7, 9];
nums3 = [1, 2, 5, 8, 9];

const findMatches = (nums1, nums2, nums3) => {
  const matchesArray = nums1.filter(num => {
    return nums2.includes(num) && nums3.includes(num);
  });
  return matchesArray;
};

console.log(findMatches(nums1, nums2, nums3));
