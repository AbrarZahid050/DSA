class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListWithTail {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  showSize() {
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty.");
    } else {
      let currPointer = this.head;
      let ListValues = "";
      while (currPointer) {
        ListValues += `${currPointer.value} `;
        currPointer = currPointer.next;
      }
      console.log(ListValues);
    }
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
    return value;
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
    return value;
  }

  removeFromFront() {
    let removedNode;
    if (this.isEmpty()) {
      return null;
    } else {
      removedNode = this.head;
      this.head = this.head.next;
    }
    this.size--;
    return removedNode.value;
  }

  removeFromEnd() {
    let removedNode = this.tail;
    if (this.isEmpty()) {
      return null;
    } else if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prevPointer = this.head;
      while (prevPointer.next !== this.tail) {
        prevPointer = prevPointer.next;
      }
      prevPointer.next = null;
      this.tail = prevPointer;
    }
    this.size--;
    return removedNode.value;
  }
}

export default LinkedListWithTail;
