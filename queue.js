class _Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  } 
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
}