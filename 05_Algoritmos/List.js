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

  add(value) {
    const node = new Node(value);
    node.setNext(this.head);
    this.head = node;
  }
}
