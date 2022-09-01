export default class DoubleEndedQueue {
  constructor() {
    this.doubleEndedQueue = [];
  }

  addFront(item) {
    this.doubleEndedQueue.unshift(item);
  }

  addRear(item) {
    this.doubleEndedQueue.push(item);
  }

  removeFront() {
    return this.doubleEndedQueue.unshift();
  }

  removeRear() {
    return this.doubleEndedQueue.pop();
  }

  isEmpty() {
    return this.doubleEndedQueue.length === 0;
  }

  size() {
    return this.doubleEndedQueue.length;
  }
}
