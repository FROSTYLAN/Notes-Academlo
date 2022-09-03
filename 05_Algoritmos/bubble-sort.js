function bubbleSort(data) {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - 1; j++) {
      const current = data[j];
      const next = data[j + 1];
      if (current > next) {
        data[j] = next;
        data[j + 1] = current;
      }
    }
  }
}

const items = [3, 2, 3, 5, 1, 2, 3, 4];

bubbleSort(items);
console.log(items);
