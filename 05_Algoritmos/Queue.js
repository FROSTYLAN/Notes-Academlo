export default class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    this.queue.shift();
  }
  isEmpty() {
    this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}
