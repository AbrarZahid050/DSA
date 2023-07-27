export class TestCircular {
  constructor(capacity) {
    this.capacity = capacity;
    this.currentLenght = 0;
    this.rear = -1;
    this.front = -1;
    this.items = [];
  }

  isFull() {
    return this.capacity === this.currentLenght;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLenght += 1;
      if (this.front === -1) {
        this.front = 0;
      }
    } else {
      console.log("Circular array is full.");
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const item = this.items[this.front];
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currentLenght -= 1;
      return item;
    } else {
      this.front = -1;
      this.rear = -1;
      return null;
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    let i;
    let str = "";
    for (i = this.front; i != this.rear; i = (i + 1) % this.capacity) {
      str += this.items[i] + " ";
    }
    str += this.items[i];
    console.log(str);
  }
}
