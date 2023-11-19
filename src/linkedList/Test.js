class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront() {
    let removeNode = null;
    if (this.isEmpty()) {
      return "List is already empty.";
    } else if (this.size === 1) {
      removeNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      removeNode = this.head;
      this.head = this.head.next;
    }
    this.size--;
    return removeNode.value;
  }

  removeFromEnd() {
    let removeNode = null;
    if (this.isEmpty()) {
      return "List is already empty.";
    } else if (this.size === 1) {
      removeNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      removeNode = this.tail;
      let prevPointer = this.head;
      while (prevPointer.next !== this.tail) {
        prevPointer = prevPointer.next;
      }
      this.tail = prevPointer;
      this.tail.next = null;
    }
    this.size--;
    return removeNode.value;
  }

  display() {
    let list = "";
    if (this.isEmpty()) {
      return "List is empty";
    } else {
      let currPointer = this.head;
      while (currPointer) {
        list += `${currPointer.value} -> `;
        currPointer = currPointer.next;
      }
      list += "null";
    }
    console.log(list);
  }
}
