function insertionSort(data) {
  for (let i = 0; i < data.length; i++) {
    let position = i;
    while (position > 0 && data[position] < data[position - 1]) {
      const temp = data[position - 1];
      data[position - 1] = data[position];
      data[position] = temp;
      position--;
    }
  }
}

const items = [2, 3, 1, 0];
