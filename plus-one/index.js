const plusOne = (digits) => {
  let array = [];
  if (digits.length < 16) {
    const number = parseInt(digits.join(''), 10) + 1;
    array.push(number.toString().split(''));
  } else {
    let number = BigInt(digits.join(''), 10);
    number ++; 
    array.push(number.toString().split(''));
  }
  return array;
}

// You are given a large integer represented as an integer array digits, 
// where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant to least significant in left-to-right order. 
// The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

const test = {
  one: { input: [1,2,3], expected: [1,2,4] }, 
  two: { input: [4,3,2,1], expected: [4,3,2,2] }, 
  three: { input: [9], expected: [1,0] },
  four: { input: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3], expected: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4] }
}

console.log(`You got ${plusOne(test['one']['input'])}. The answer is ${test['one']['expected']}`);
console.log(`You got ${plusOne(test['two']['input'])}. The answer is ${test['two']['expected']}`);
console.log(`You got ${plusOne(test['three']['input'])}. The answer is ${test['three']['expected']}`);
console.log(`You got ${plusOne(test['four']['input'])}. The answer is ${test['four']['expected']}`);


// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.