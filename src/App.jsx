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
//binary-search tree:
import { Tree } from "./BinarySearchTree/BinarySearchTree";
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
  const tree = new Tree();

  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);

  console.log(tree.search(tree.root, 7));

  return (
    <div>
      <div>Data Structure and Algo</div>
    </div>
  );
}

export default App;
