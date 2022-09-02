class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  getData() {
    return this.data;
  }

  getNext() {
    return this.next;
  }

  setData(data) {
    this.data = data;
  }

  setNext(nextNode) {
    this.next = nextNode;
  }
}

class List {
  constructor() {
    this.head = null;
  }

  search(data) {
    const current = this.head;
    const found = false;

    while (current && !found) {
      if (current.getData() === data) {
        found = true;
      }
    }
  }

  remove(data) {
    let current = this.head;
    let previous = null;
    let found = false;

    while (!found) {
      if (current.getData() === data) {
        found = true;
      } else {
        previous = current;
        current = current.getNext();
      }
    }

    if (previous === null) {
      this.head = current.getNext();
    } else {
      previous.setNext(current.getNext());
    }
  }

  size() {
    let current = this.head;
    let counter = 0;

    while (current != null) {
      counter++;
      current = current.getNext();
    }

    return counter;
    a;
  }

  isEmpty() {
    return this.head === null;
  }
}
