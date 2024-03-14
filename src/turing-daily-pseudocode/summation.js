//Pseudocode
/* GOAL -> write a function that finds the sum of every number from 1 to the number given as the parameter/argument

INPUT -> positive number greater than 0
OUTPUT -> summation of all the numbers up to num
     Case: if I pass 4 into this function, it should add
        1+2+3+4 and return the result for me.
 HOW -> 
  ~Use a for loop and loop through adding the numbers together until loop reaches 'num'
  ~Could we also create an array of all the numbers up to and including 'num' and then figure a running sum on this array?
METHOD ->
 For Loop
  Set a variable equal to zero
  Set up the for loop to loop through until num
  Add each number as we loop to the variable */

const summation = num => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

export default summation;
