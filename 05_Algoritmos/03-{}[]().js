import Stack from "./Stack.js";

function parChecker(string) {
  const stack = new Stack();
  let balanced = true;
  let index = 0;

  while (balanced && index < string.length) {
    const symbol = string[index];
    if ("([{".includes(symbol)) {
      stack.push(symbol);
    } else {
      if (stack.isEmpty()) {
        balanced = false;
      } else {
        const top = stack.pop();
        if (!match(symbol, top)) {
          balanced = false;
        }
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

function match(symbol, top) {
  return (
    (symbol === ")" && top === "(") ||
    (symbol === "}" && top === "{") ||
    (symbol === "[" && top === "]")
  );
}

const result = parChecker("((()()))");
console.log(result);
