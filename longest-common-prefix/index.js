// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

const longestCommonPrefix = (strings) => {
  prefix = "";

  // if the array is empty, there is no common prefix, return empty string
  if (strings.length === 0) {
    return prefix; 
  }

  // if the prefix is empty, add the current string's first letter
  // If the prefix is true,

  console.log(prefix);
  return prefix

  // // Iterate over each word
  // // Find the first letter
  // prefixOccurrences = {};
  // // { prefix: occurence }

  // const words = [];
  // strings.forEach((string) => {
  //   words.push(string.split(""));
  // });
  // // if prefixOccurrences already includes the prefix key, add + 1 to that value
  // // add each prefix to prefixOccurrences
  // words.forEach((word) => {
  //   console.log(word.length);
  //   word.forEach((letter, index) => {
  //     console.log(`${letter} - ${index}`);
  //     // const active = word.length === (index + 1);
  //     if (index === 0) {
  //       console.log("index 0");
  //       if (prefixOccurrences[letter]) {
  //         newValue = prefixOccurrences[letter] + 1;
  //         prefixOccurrences[letter] = newValue;
  //       } else {
  //         prefixOccurrences[letter] = 1;
  //       }
  //     }
  //     if (index > 0) {
  //       prefix = word.slice(0, (index + 1)).join('');
  //       console.log(prefix);
  //       if (prefixOccurrences[prefix]) {
  //         newValue = prefixOccurrences[prefix] + 1;
  //         prefixOccurrences[prefix] = newValue;
  //       } else {
  //         (prefixOccurrences[prefix]) = 1;
  //       }
  //     }
  //   });
  // });
  // console.log(prefixOccurrences);
};

const words1 = ["flower","flow","flight"];
const words2 = ["dog","racecar","car"];


console.log(`You got: "${longestCommonPrefix(words1)}" The answer is "fl"`);
console.log(`You got: "${longestCommonPrefix(words2)}" The answer is ""`);

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.
// Accepted
// 1,992,752
// Submissions
