import LinkedListWithTail from "./LinkedListTail";

export class LinkedListQueue {
  constructor() {
    this.queue = new LinkedListWithTail();
  }

  enqueue(value) {
    this.queue.append(value);
  }

  dequeue() {
    return this.queue.removeFromFront();
  }

  peek() {
    return this.queue.head.value;
  }

  isEmpty() {
    return this.queue.isEmpty();
  }

  showSize() {
    return this.queue.showSize();
  }
  print() {
    return this.queue.print();
  }
}
