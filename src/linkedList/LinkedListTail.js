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
    const node = new Node();
    if (this.isEmpty()) {
    }
  }
}

export default LinkedListWithTail;
