//Queue is First-in First-out FIFO.

// Enqueue => adds an element into the front
// Dequeue => removes an element from the tail.

// one major drawback of this implementation of Queue is that
// dequeue and enqueue both are linear time complex O(n), which
// is un-desireable.

export class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
    return `${element} has been added into the queue!`;
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    return this.items.toString();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}
