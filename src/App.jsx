import { Stack } from "./stack/Stack";
import { Queue } from "./queue/Queue";
import { EfficientQueue } from "./queue/EfficientQueue";
import { CircularQueue } from "./queue/Circular Queue/CircularQueue";
import { TestCircular } from "./queue/Circular Queue/TestCircular";
import { LinkedList } from "./linkedList/LinkedList";
import LinkedListWithTail from "./linkedList/LinkedListTail";
import { LinkedListStack } from "./linkedList/LinkedListStack";
import { LinkedListQueue } from "./linkedList/LinkedListQueue";
import { DoublyLinkedList } from "./DoublyLinkedList/DoublyLinkedList";
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

  DoublyList.prepend(50);
  DoublyList.prepend(40);
  DoublyList.prepend(30);
  DoublyList.append(60);
  DoublyList.prepend(20);
  DoublyList.prepend(10);
  DoublyList.print();
  DoublyList.removeFromEnd();
  DoublyList.removeFromEnd();
  DoublyList.append(999);
  DoublyList.print();
  DoublyList.removeFromEnd();
  DoublyList.print();

  return (
    <div>
      <div>Data Structure and Algo</div>
    </div>
  );
}

export default App;
