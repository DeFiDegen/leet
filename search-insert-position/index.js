const searchInsert = (nums, target) => {
  let index = 0; 
  while (nums[index] < target) { index++ };
  return index;
}

const inputs = {
  input1: {
    nums: [1,3,5,6],
    target: 5,
    expectedOutput: 2
  },
  input2: {
    nums: [1,3,5,6],
    target: 2,
    expectedOutput: 1
  },
  input3: {
    nums: [1,3,5,6],
    target: 7,
    expectedOutput: 4
  },
  input4: {
    nums: [1,3,5,6],
    target: 0,
    expectedOutput: 0
  },
  input5: {
    nums: [1],
    target: 0,
    expectedOutput: 0
  }
}

console.log(`You got ${searchInsert(inputs["input1"]['nums'], inputs["input1"]['target'])}. The answer is ${inputs["input1"]['expectedOutput']}`);
console.log(`You got ${searchInsert(inputs["input2"]['nums'], inputs["input2"]['target'])}. The answer is ${inputs["input2"]['expectedOutput']}`);
console.log(`You got ${searchInsert(inputs["input3"]['nums'], inputs["input3"]['target'])}. The answer is ${inputs["input3"]['expectedOutput']}`);
console.log(`You got ${searchInsert(inputs["input4"]['nums'], inputs["input4"]['target'])}. The answer is ${inputs["input4"]['expectedOutput']}`);
console.log(`You got ${searchInsert(inputs["input5"]['nums'], inputs["input5"]['target'])}. The answer is ${inputs["input5"]['expectedOutput']}`);
