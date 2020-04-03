class _Node {
  constructor(value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
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
      node.prev = this.last;
    }
    this.last = node;
  }
  dequeue() {
    if(this.first === null){
      return;
    }
    const node =this.first;
    if (node.next === null) {
      this.first = null;
      this.last = null;
      return;
    }
    let newFirst = node.next; //null 
    newFirst.prev = null;
    this.first = newFirst;
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

function pairDancers(maleQ, femaleQ){
  let mCurrentNode = maleQ.first;
  let fCurrentNode = femaleQ.first;

  while((mCurrentNode !== null) && (fCurrentNode !== null)){
    console.log(`Female dancer is ${fCurrentNode.value} and male dancer is ${mCurrentNode.value}`);
    maleQ.dequeue();
    femaleQ.dequeue();
    mCurrentNode = maleQ.first;
    fCurrentNode = femaleQ.first;
  }
  if (mCurrentNode !== null) {
    let count = 1;
    while (mCurrentNode.next !== null) {
      count++;
      mCurrentNode = mCurrentNode.next;
    }
    console.log(`There are ${count} male dancers waiting to dance`);
  }

  if (fCurrentNode !== null) {
    let count = 1;
    while (fCurrentNode.next !== null) {
      count++;
      fCurrentNode = fCurrentNode.next;
    }
    console.log(`There are ${count} female dancers waiting to dance`);
  }
}

function ophidianBank(queue) {
  let currNode = queue.first;
  while(currNode.next !== null) {
    let isReady = Math.random();
    if (isReady > .25) {
      console.log(`Customer helped successfully`);
      currNode = currNode.next;
    } else {
      console.log(`Customer wasn't ready`);
      queue.dequeue();
      queue.enqueue(currNode);
    }
  }
}

function main() {
  let starTrekQ = new Queue;
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  let maleQ = new Queue;
  let femaleQ = new Queue;
  femaleQ.enqueue('Jane');
  maleQ.enqueue('Frank');
  maleQ.enqueue('John');
  maleQ.enqueue('Sherlock');
  femaleQ.enqueue('Madonna');
  maleQ.enqueue('David');
  maleQ.enqueue('Christopher');
  femaleQ.enqueue('Beyonce');
  return ophidianBank(starTrekQ);
}

console.log(main());