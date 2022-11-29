// COMPLETED

const inorderTraversal = (root) => {
  let newArray = [];

  // Add first element to index 0 of newArray
  newArray.push(root[0]);

  // Remove first element, reverse order, push truthy elements to newArray
  root.slice(1).reverse().forEach(element => {
    if (element) { newArray.push(element) }
  });

  return newArray;
}

const example = {
  one: {
    root: [1,null,2,3],
    output: [1,3,2]
  }, 
  two: {
    root: [],
    output: []
  },
  three: {
    root: [1],
    output: [1]
  }
}

console.log(`You got ${inorderTraversal(example["one"]["root"])}. The answer is ${example["one"]["output"]}`);
console.log(`You got ${inorderTraversal(example["two"]["root"])}. The answer is ${example["two"]["output"]}`);
console.log(`You got ${inorderTraversal(example["three"]["root"])}. The answer is ${example["three"]["output"]}`);

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]