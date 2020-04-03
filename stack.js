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
    return this.top;
  }
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek(stack) {
  return stack.top;
}

function isEmpty(stack) {
  if(stack.top === null) {
    return true;
  }
  return false;
}

function display(stack) {
  let currNode = stack.top;
  let list = '';
  while (currNode.next !== null) {
    list += `${currNode.value} => `;
    currNode = currNode.next;
  }
  list += `${currNode.value}`;
  return list;
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let stack = new Stack;

  for (let i = 0; i < s.length; i++) {
    stack.push(s.charAt(i));
  }

  let stackString = '';
  let currNode = stack.top;
  while (currNode.next !== null) {
    stackString += currNode.value;
    currNode = currNode.next;
  }
  stackString += currNode.value;

  if (s === stackString) {
    return true;
  } else {
    return false;
  }
}

function matchingParenths(string) {
  let stack = new Stack;
  let error = null;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      if (stack.top === null) {
        stack.push(string[i]);
      } else if (stack.top === ")") {
        stack.push(string[i]);
      } else if (stack.top !==null && stack.top !== ")") {
        error = `String missing a ')' before '(' at index ${i}`;
      }
    }
    if (string[i] === ")" && stack.top !== "(") {
      error = `String missing a '(' before ')' at index ${i}`;
    } else  if (string[i] === ")"){
      stack.push(string[i]);
    }
  }
  if (error) {
    return error;
  } else {
    return 'String checks out!';
  }
}

function matchingParenths2(string){
  let stack = new Stack;
  let error = null;

  for (let i= 0; i < string.length;i ++){
    if(string[i] === '('){
      stack.push(i);
    } else if ((string[i] === ')')) {
      if (stack.top !== null){
        stack.pop();
      } else {
        error = `You have an unexpected closing parentheses at index ${i}`;
      }
    } 
  }

  if(stack.top !== null){
    error = `You have an unexpected open parentheses at index ${stack.top.value}`;
  }

  if (error === null){
    return 'String checks out!';
  } else {
    return error;
  }
}

function queueFromStack(stack) {
  let queuedStack = new Stack;
  let currNode = stack.top;
  while(currNode.next !== null) {
    queuedStack.push(currNode.value);
    currNode = currNode.next;
  }
  queuedStack.push(currNode.value);
  return queuedStack;
}

function main() {
  let starTrek = new Stack;
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  return display(queueFromStack(starTrek));
}

console.log(main());