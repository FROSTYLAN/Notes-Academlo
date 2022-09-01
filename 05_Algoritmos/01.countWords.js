function countWords(text) {
  const array = text.split(" ");
  const solution = {};

  array.forEach((word) => {
    solution[word] ? solution[word]++ : (solution[word] = 1);
  });

  return solution;
}

const result = countWords("Hola soy charles Hola");
console.log(result);
