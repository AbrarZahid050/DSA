import { Stack } from "./stack/Stack";
import { Queue } from "./queue/Queue";
import { EfficientQueue } from "./queue/EfficientQueue";
import { CircularQueue } from "./queue/Circular Queue/CircularQueue";
import { TestCircular } from "./queue/Circular Queue/TestCircular";
import { LinkedList } from "./linkedList/LinkedList";
import LinkedListWithTail from "./linkedList/LinkedListTail";
import "./App.css";

function App() {
  const stack = new Stack();
  const queue = new Queue();
  const efficientQueue = new EfficientQueue();
  const circularQueue = new CircularQueue(5);
  const Test = new TestCircular(3);
  const list = new LinkedList();
  const listWithTail = new LinkedListWithTail();

  listWithTail.prepend(10);
  listWithTail.prepend(20);
  listWithTail.prepend(30);
  listWithTail.append(50);
  listWithTail.append(60);
  console.log(listWithTail.removeFromEnd());
  console.log(listWithTail.removeFromEnd());
  console.log(listWithTail.removeFromEnd());
  console.log(listWithTail.removeFromEnd());
  console.log(listWithTail.removeFromEnd());
  listWithTail.append(10);
  listWithTail.append(20);
  listWithTail.append(30);
  listWithTail.append(40);
  listWithTail.print();

  return (
    <div>
      <div>Data Structure and Algo</div>
    </div>
  );
}

export default App;
