// COMPLETED

const isSameTree = (p, q) => {
  let answer = false;
  if (p.length !== q.length) { 
    answer = false 
  } else {
    for (const [i, v] of p.entries()) {
      if (v === q[i]) { answer = true }
      if (v !== q[i]) { 
        answer = false;
        break;
      }
    }
  }
  return answer;
};

const example = {
  one: {
    p: [1,2,3],
    q: [1,2,3],
    output: true
  },
  two: {
    p: [1,2],
    q: [1,null,2],
    output: false
  },
  three: {
    p: [1,2,1],
    q: [1,1,2],
    output: false
  }
}

console.log(`You got ${isSameTree(example["one"]["p"], example["one"]["q"])}. The answer is ${example["one"]["output"]}`);
console.log(`You got ${isSameTree(example["two"]["p"], example["two"]["q"])}. The answer is ${example["two"]["output"]}`);
console.log(`You got ${isSameTree(example["three"]["p"], example["three"]["q"])}. The answer is ${example["three"]["output"]}`);