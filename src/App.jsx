import { Stack } from "./stack/Stack";
import { Queue } from "./queue/Queue";
import { EfficientQueue } from "./queue/EfficientQueue";
import { CircularQueue } from "./queue/Circular Queue/CircularQueue";
import { TestCircular } from "./queue/Circular Queue/TestCircular";
//linked-lists:
import { LinkedList } from "./linkedList/LinkedList";
import LinkedListWithTail from "./linkedList/LinkedListTail";
import { LinkedListStack } from "./linkedList/LinkedListStack";
import { LinkedListQueue } from "./linkedList/LinkedListQueue";
import { DoublyLinkedList } from "./DoublyLinkedList/DoublyLinkedList";
//hash-table:
import { HashTable } from "./HashTable/HashTable";
//style:
import "./App.css";

function App() {
  const stack = new Stack();
  const queue = new Queue();
  const efficientQueue = new EfficientQueue();
  const circularQueue = new CircularQueue(5);
  const Test = new TestCircular(3);
  const list = new LinkedList();
  const listWithTail = new LinkedListWithTail();
  const linkedListStack = new LinkedListStack();
  const linkedListQueue = new LinkedListQueue();
  const DoublyList = new DoublyLinkedList();
  const hashTable = new HashTable(50);

  hashTable.set("name", "abrar");
  hashTable.set("age", 32);
  hashTable.display();

  return (
    <div>
      <div>Data Structure and Algo</div>
    </div>
  );
}

export default App;
