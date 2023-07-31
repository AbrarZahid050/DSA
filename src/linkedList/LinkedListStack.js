import LinkedListWithTail from "./LinkedListTail";

export class LinkedListStack {
  constructor() {
    this.stack = new LinkedListWithTail();
  }

  push(value) {
    this.stack.prepend(value);
  }

  pop() {
    return this.stack.removeFromFront();
  }

  peek() {
    return this.stack.head.value;
  }

  isEmpty() {
    return this.stack.isEmpty();
  }

  getSize() {
    this.stack.getSize();
  }

  print() {
    return this.stack.print();
  }
}
