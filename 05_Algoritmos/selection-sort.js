function selectionSort(data) {
  for (let i = 0; i < data.length; i++) {
    let minItemPosition = i;
    for (let j = 0; j < data.length; j++) {
      if (data[j] < data[minItemPosition]) {
        minItemPosition = j;
      }
    }
    const aux = data[i];
    data[i] = data[minItemPosition];
    data[minItemPosition] = aux;
  }
}

const items = [60, 20, 12, 32, 43, 12, 65, 12, 34, 0];

selectionSort(items);
console.log(items);
