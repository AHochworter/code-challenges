nums = [1, 2, 3, 4];

/*Pseudocode
 GOAL -> Return an array of the running sum.
 INPUT -> An array of numbers
 OUTPUT -> An array (of the same length), that calculates the next sum by adding the elements ahead of it
 HOW -> iterate over the array adding the elements together as you iterate
 METHODS -> 
    map seems like a good place to start.

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
