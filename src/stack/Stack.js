//Stack is First-in Last-out FILO.

// push => adds an element into the front
// pop => removes and element from the head.

export class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
    return `element ${element} has been pushed into the stack!`;
  }

  pop() {
    this.items.pop();
    return "element has been popped out of stack!";
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }
}
