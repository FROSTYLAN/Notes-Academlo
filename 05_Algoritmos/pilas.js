import Stack from "./Stack.js";

function par_checker(string) {
  const stack = new Stack();
  let balanced = true;
  let index = 0;

  while (balanced && index < string.length) {
    const symbol = string[index];
    if (symbol === "(") {
      stack.push(symbol);
    } else {
      if (stack.isEmpty()) {
        balanced = false;
      } else {
        stack.pop();
      }
    }
    index++;
  }
  // Para que estén balanceados la pila debe estar vacía.
  if (balanced && stack.isEmpty()) {
    return true;
  }
  return false;
}

const result = par_checker("((()()))");
console.log(result);
