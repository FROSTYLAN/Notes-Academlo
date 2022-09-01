import Stack from "./Stack.js";

function parCheckerPro(string) {
  const stack1 = new Stack();
  const stack2 = new Stack();
  const stack3 = new Stack();
  let balanced = true;
  let index = 0;

  while (balanced && index < string.length) {
    const symbol = string[index];
    switch (symbol) {
      case "(":
        stack1.push(symbol);
        break;
      case ")":
        if (stack1.isEmpty()) {
          balanced = false;
        } else {
          stack1.pop();
        }
        break;
      case "[":
        stack2.push(symbol);
        break;
      case "]":
        if (stack2.isEmpty()) {
          balanced = false;
        } else {
          stack2.pop();
        }
        break;
      case "{":
        stack3.push(symbol);
        break;
      case "}":
        if (stack3.isEmpty()) {
          balanced = false;
        } else {
          stack3.pop();
        }
        break;
      default:
        break;
    }
    index++;
  }

  if (balanced && stack1.isEmpty() && stack2.isEmpty() && stack3.isEmpty()) {
    return true;
  }
  return false;
}

const result = parCheckerPro("((()()[]{}))");
console.log(result);
