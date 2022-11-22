//  COMPLETE
 
const isValid = (string) => {
  let closingCharacter = [];
  const parentheses = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  
  for (const character of string.split("")) {
    // If the character is a closing tag and closingCharacter is empty
    if (!parentheses[character] && (closingCharacter.length === 0)) {
      closingCharacter[0] = "false";
      break;
    }

    // If the character is an opening tag
    if (parentheses[character]) {
      closingCharacter.push(parentheses[character]);
    } else {
      // if the character is a closing tag and does NOT match it's corresponding open tag
      if (character !== closingCharacter[(closingCharacter.length - 1)]) { break }
      // if the character is a closing tag and matches it's corresponding open tag
      if (character === closingCharacter[(closingCharacter.length - 1)]) { closingCharacter.pop() }
    }
  }

  return closingCharacter.length === 0 ? true : false;
}
