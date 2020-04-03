class _Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  } 
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(item) {
    if (this.top === null) {
      this.top = new _Node(item);
      return this.top;
    }
    const node = new _Node(item, this.top);
    this.top = node;
  }
  pop() {
    const node = this.this.top;
    this.top = node.next;
    return node.data;
  }
}