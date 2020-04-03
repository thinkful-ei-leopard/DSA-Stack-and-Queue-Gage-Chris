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

function peek(queue){
  if (queue.first === null) {
    return 'Cannot display first item of an empty queue';
  }
  return queue.first;
}

function isEmpty(queue){
  if(queue.first === null) {
    return true;
  }
  return false;
}

function display(queue){
  if (queue.first === null) {
    return 'Cannot display an empty queue';
  }
  let currNode = queue.first;
  let queueString = '';
  while (currNode.next !== null) {
    queueString += `${currNode.value} => `;
    currNode = currNode.next;
  }
  queueString += `${currNode.value}`;
  return queueString;
}

function main() {
  let starTrekQ = new Queue;
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  // console.log(peek(starTrekQ));
  // console.log(isEmpty(starTrekQ));
  // console.log(display(starTrekQ));
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  console.log(display(starTrekQ));
  return starTrekQ;
}

console.log(main());