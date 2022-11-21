const lengthOfLastWord = (s) => {
  array = [];
  s.split(" ").forEach((string) => {
    if (string)  {
      array.push(string);
      console.log("Works");
    }
  });
  return array[array.length - 1].split('').length;
}

string1 = "Hello World"; // Answer 5
string2 = "   fly me   to   the moon  "; // Answer 4
string3 = "luffy is still joyboy"; // Answer 6

console.log(`You got: ${lengthOfLastWord(string1)}. Expected: 5`);
console.log(`You got: ${lengthOfLastWord(string2)}. Expected: 4`);
console.log(`You got: ${lengthOfLastWord(string3)}. Expected: 6`);

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
