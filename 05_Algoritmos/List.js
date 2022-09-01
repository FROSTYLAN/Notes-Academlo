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
