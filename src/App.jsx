import { Stack } from "./stack/Stack";
import { Queue } from "./queue/Queue";
import { EfficientQueue } from "./queue/EfficientQueue";
import { CircularQueue } from "./queue/Circular Queue/CircularQueue";
import { TestCircular } from "./queue/Circular Queue/TestCircular";
import { LinkedList } from "./linkedList/LinkedList";
import LinkedListWithTail from "./linkedList/LinkedListTail";
import { LinkedListStack } from "./linkedList/LinkedListStack";
import { LinkedListQueue } from "./linkedList/LinkedListQueue";
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

  console.log(linkedListQueue.showSize());
  linkedListQueue.enqueue(10);
  linkedListQueue.enqueue(20);
  linkedListQueue.enqueue(30);
  linkedListQueue.print();
  linkedListQueue.dequeue();
  linkedListQueue.print();

  return (
    <div>
      <div>Data Structure and Algo</div>
    </div>
  );
}

export default App;
