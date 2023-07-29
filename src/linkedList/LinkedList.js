class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  showSize() {
    return this.size;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prePointer = this.head;
      while (prePointer.next) {
        prePointer = prePointer.next;
      }
      prePointer.next = node;
    }
    this.size++;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.append(value);
    } else {
      const node = new Node(value);
      let prePointer = this.head;
      for (let i = 0; i < index - 1; i++) {
        prePointer = prePointer.next;
      }
      node.next = prePointer.next;
      prePointer.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prevPointer = this.head;
      for (let i = 0; i < index - 1; i++) {
        prevPointer = prevPointer.next;
      }
      removedNode = prevPointer.next;
      prevPointer.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty.");
    } else {
      let current = this.head;
      let listValue = "";
      while (current) {
        listValue += `${current.value} `;
        current = current.next;
      }
      console.log(listValue);
    }
  }
}
