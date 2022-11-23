const deleteDuplicates = (head) => {
  const object = {};
  const newArray = [];

  for (const number of head) {
    if (!object[number]) {
      newArray.push(number);
      object[number] = true;
    }
  }
}

example1 = {
  input: [1,1,2],
  output: [1,2]
}

example2 = {
  input: [1,1,2,3,3],
  output: [1,2,3]
}

console.log(`You got ${example1['input']}. The answer is ${example1['output']}`);
console.log(`You got ${example2['input']}. The answer is ${example2['output']}`);
// Given the head of a sorted linked list, 
// delete all duplicates such that each element appears only once. 
// Return the linked list sorted as well.

// Example 1:

// Input: head = [1,1,2]
// Output: [1,2]

// Example 2:

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]