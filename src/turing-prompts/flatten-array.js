// const arr = [1, 2, 3, [4, 5]];

function flattenArray(arr) {
  // console.log('arr', arr);
  return arr.reduce((accumulator, currentValue) => {
    if (Array.isArray(currentValue)) {
      return accumulator.concat(flattenArray(currentValue));
    } else {
      return accumulator.concat(currentValue);
    }
  }, []); // Initial value is an empty array
}

// console.log(flattenArray(arr));

/* In Ruby and JavaScript, there is a built in method/function to flatten arrays, meaning it makes them one-dimensional. Below are examples of both Ruby and JavaScript: 

    #JavaScript
    var nums = [ 0, 1, 2, [ 3, 4 ] ]
    nums.flat()
    => [ 0, 1, 2, 3, 4 ]
    
    Your goal is to recreate this functionality without using the built in method/function. You will be given a deeply nested array, or multi-dimensional array, that will look similar to either of the below:
    
  nums = [1, 2, 3, [[4], 5], [[[6]]]]
  words = ["hi", "this is", [[["string"], "that is very"],     [[[["nested"]]]]]]
  
UNDERSTAND: Without using a built in method write a function that will flatten a nested array into one array.
MATCH: I don't know of any
PLAN:
  - Iterate over each element, check to see if the element  is an array?  
    - If not, push/add element to one-dimensional array.  
    - If it is an array
      - This is the recursive portion, so send it through again.
      
*/
// array = [1, 2, 3, [[4], 5], [[[6]]]];

// const flattenArray2 = array => {
//   // console.log('array', array);
//   return array.reduce((acc, curVal) => {
//     // console.log('acc', acc);
//     //check to see if the curVal is an Array
//     if (Array.isArray(curVal)) {
//       // console.log('curVal', curVal);
//       //if true, call flattenArray on it (recursion)
//       return acc.concat(flattenArray2(curVal));
//     } else {
//       // if it's not an Array, concatenate element to accumulator
//       return acc.concat(curVal);
//     }
//   }, []);
// };

// console.log(flattenArray2(array));

// const wackyFlat = array => {
//   return array.join(',').split(',').map(Number);
// };

// console.log(wackyFlat(array));

export default flattenArray;
