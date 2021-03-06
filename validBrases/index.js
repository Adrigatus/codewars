function validBraces(braces){
    let matches = { '(':')', '{':'}', '[':']' };
    let stack = [];
    let currentChar;
  
    for (var i=0; i<braces.length; i++) {
      currentChar = braces[i];
  
      if (matches[currentChar]) { 
        stack.push(currentChar);
      } else { 
        if (currentChar !== matches[stack.pop()]) {
          return false;
        }
      }
    }
  
    return stack.length === 0; 
}

console.log(validBraces( "()" ));