// COMPLETED

const lengthOfLongestSubstring = (string) => {
  let result = 0;
  let activeSubstring = '';
  const subStrings = [];
  let object = {};
  const array = string.split('');
  if (array.length === 1) {
    result = 1;
  } else {
    array.forEach((s) => {
      if (object[s]) {
        if (activeSubstring.match(s)) {
          subStrings.push(activeSubstring);
          activeSubstring += s;
          activeSubstring = activeSubstring.slice(activeSubstring.indexOf(s) + 1);
        } else if (!activeSubstring.match(s)) {
          subStrings.push(activeSubstring);
          activeSubstring += s;
        } else {
          subStrings.push(activeSubstring);
          activeSubstring = s;
        }
      }
      if (!object[s]) {
        object[s] = true;
        activeSubstring += s;
      }
    });
    subStrings.push(activeSubstring);
    subStrings.forEach((subString) => {
      if (subString.length > result) {
        result = subString.length;
      }
    })
  }
  return result;
}

const example = {
  one: {
    input: "abcabcbb",
    output: 3
  },
  two: {
    input: "bbbbb",
    output: 1
  },
  three: {
    input: "pwwkew",
    output: 3
  }, 
  four: {
    input: " ",
    output: 1
  }, 
  five: {
    input: "au",
    output: 2
  }, 
  six: {
    input: "dvdf",
    output: 3
  },
  seven: {
    input: "tmmzuxt",
    output: 5
  },
  eight: {
    input: "ohvhjdml",
    output: 6
  }
}

console.log(`You got ${lengthOfLongestSubstring(example['one']['input'])}. The answer is ${example['one']['output']}`);
console.log(`You got ${lengthOfLongestSubstring(example['two']['input'])}. The answer is ${example['two']['output']}`);
console.log(`You got ${lengthOfLongestSubstring(example['three']['input'])}. The answer is ${example['three']['output']}`);
console.log(`You got ${lengthOfLongestSubstring(example['four']['input'])}. The answer is ${example['four']['output']}`);
console.log(`You got ${lengthOfLongestSubstring(example['five']['input'])}. The answer is ${example['five']['output']}`);
console.log(`You got ${lengthOfLongestSubstring(example['six']['input'])}. The answer is ${example['six']['output']}`);
console.log(`You got ${lengthOfLongestSubstring(example['seven']['input'])}. The answer is ${example['seven']['output']}`);

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
