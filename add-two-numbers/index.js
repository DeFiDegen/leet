// COMPLETED
const addTwoNumbers = (l1, l2) => {
  // Split array elements into single number for both arrays
  // Add two numbers
  const added = parseInt(l1.join(''), 10) + parseInt(l2.join(''), 10);
  // Split digits into an array then reverse array
  const array = added.toString().split("").reverse();
  return array;
};

const example = {
  one: {
    l1: [2,4,3],
    l2: [5,6,4],
    output: [7,0,8]
  },
  two: {
    l1: [0],
    l2: [0],
    output: [0]
  },
  three: {
    l1: [9,9,9,9,9,9,9],
    l2: [9,9,9,9],
    output: [8,9,9,9,0,0,0,1]
  }
}

console.log(`You got ${addTwoNumbers(example['one']['l1'], example['one']['l2'])}. The answer is ${example['one']['output']}`);
console.log(`You got ${addTwoNumbers(example['two']['l1'], example['two']['l2'])}. The answer is ${example['two']['output']}`);
console.log(`You got ${addTwoNumbers(example['three']['l1'], example['three']['l2'])}. The answer is ${example['three']['output']}`);

// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
