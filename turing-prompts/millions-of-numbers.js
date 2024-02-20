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
    

PSEUDOCODE:
UNDERSTAND: Find the numbers that exist in all 3 arrays. Return those matches as an new array
    Clarifying Questions: 
        -What if one of the arrays is empty?

MATCH: Includes method? with a logical AND statement
PLAN:
    Iterate through nums1, comparision to nums2 AND nums3 - if included in both, push to matchesArray.
     */
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
