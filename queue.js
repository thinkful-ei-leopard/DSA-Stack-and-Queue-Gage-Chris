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
  enqueue(item) {
    const node = new _Node(item);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }
  dequeue() {
    if(this.first === null){
      return;
    }
    const node =this.first;
    this.first = this.first.next;
    if (node === this.last){
      this.last = null;
    }
    return node.value;
  }
}