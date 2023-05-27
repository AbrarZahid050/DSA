//Queue is First-in First-out FIFO.

// Enqueue => adds an element into the front
// Dequeue => removes an element from the tail.

export class EfficientQueue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
    return `${element} has been added into the queue.`;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return `${item} has been removed from the queue.`;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}
