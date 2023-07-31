class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
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
      this.head.prev = node;
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
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront() {
    let removedNode = this.head;
    if (this.isEmpty()) {
      return null;
    } else if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.pev = null;
    }
    this.size--;
    return removedNode.value;
  }

  removeFromEnd() {
    let removedNode = this.tail;
    if (this.isEmpty()) {
      return null;
    } else if (this.size === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return removedNode.value;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty.");
    } else {
      let currPointer = this.head;
      let listValue = "";
      while (currPointer) {
        listValue += `${currPointer.value} `;
        currPointer = currPointer.next;
      }
      console.log(listValue);
    }
  }
}
