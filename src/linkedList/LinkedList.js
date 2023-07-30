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

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prevPointer = this.head;
      while (prevPointer.next && prevPointer.next.value !== value) {
        prevPointer = prevPointer.next;
      }
      if (prevPointer.next) {
        const removedNode = prevPointer.next;
        prevPointer.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    } else {
      let currPointer = this.head;
      let index = 0;
      while (currPointer) {
        if (currPointer.value === value) {
          return index;
        }
        index++;
        currPointer = currPointer.next;
      }
      return -1;
    }
  }

  reverse() {
    let prevPointer = null;
    let currPointer = this.head;
    while (currPointer) {
      let nextPointer = currPointer.next;
      currPointer.next = prevPointer;
      prevPointer = currPointer;
      currPointer = nextPointer;
    }
    this.head = prevPointer;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty.");
    } else {
      let current = this.head;
      let listValue = "";
      while (current) {
        listValue += `${current.value} -> `;
        current = current.next;
      }
      console.log((listValue += "null"));
    }
  }
}
