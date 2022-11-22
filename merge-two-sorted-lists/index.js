// COMPETED

const mergeTwoLists = (list1, list2) => {
  const newArray = [];
  const object = {};

  for (const number of list1) {
    if (object[number]) {
      object[number] ++;
    } else {
      object[number] = 1;
    }
  }

  for (const number of list2) {
    if (object[number]) {
      object[number] ++;
    } else {
      object[number] = 1;
    }
  }

  Object.keys(object).forEach(key => {
    while (object[key] > 0) {
      newArray.push(parseInt(key, 10));
      object[key] --;
    }
  });
  
  return newArray;
}

list11 = [1,2,4];
list12 = [1,3,4];
console.log(mergeTwoLists(list11, list12));
// answer [1,1,2,3,4,4]

list21 = [];
list22 = [];
console.log(mergeTwoLists(list21, list22));
// answer []

list31 = [];
list32 = [0];
console.log(mergeTwoLists(list31, list32));
// answer [0]


// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.
