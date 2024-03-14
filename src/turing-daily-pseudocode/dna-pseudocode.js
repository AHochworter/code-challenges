// Do NOT write any code! Practice planning out how you would approach the following prompt. Your planning process should include thorough pseudocode.

// --------------------------

// Prompt: Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// Note:
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// Examples:
// getRNA("GCAT") -->  "GCAU"
// getRNA("ATCGCT") --> "AUCGCU"

// Writing pseudocode and write any questions you might have about the prompt (clarifying questions)

/*Pseudocode
GOAL -> take in a dna sequence as a string for an arguement and return the rna equivilant

INPUT -> string
OUTPUT -> string

HOW -> 
  For this challenge we'll want to find and replace any T letters with U.
    ~Could be good to change everything to lowercase
    ~Iterate (loop) through the string, will a for loop iterate through a string? (prototype iterator methods won't)

    METHOD ->
      ~for loop, with a conditional replace (if i = T, replace with U)
      ~could use a split() method to take the string to an array.  Iterate through the array, if T, replace with U



*/

const getRNA = string => {
  // Replace all occurrences of 'T' with 'U'
  let rnaString = string.replaceAll('T', 'U');
  return rnaString;
};

const getRNA2 = dnaString => {
  // Convert the string to an array of characters
  let dnaArray = dnaString.split('');

  // Use map to iterate over each character and replace 'T' with 'U'
  let rnaArray = dnaArray.map(char => (char === 'T' ? 'U' : char));

  // Convert the array back to a string and return
  let rnaString = rnaArray.join('');

  return rnaString;
};

export { getRNA, getRNA2 };
