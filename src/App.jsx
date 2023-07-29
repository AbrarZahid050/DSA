import { Stack } from "./stack/Stack";
import { Queue } from "./queue/Queue";
import { EfficientQueue } from "./queue/EfficientQueue";
import { CircularQueue } from "./queue/Circular Queue/CircularQueue";
import { TestCircular } from "./queue/Circular Queue/TestCircular";
import { LinkedList } from "./linkedList/LinkedList";
import "./App.css";

function App() {
  const stack = new Stack();
  const queue = new Queue();
  const efficientQueue = new EfficientQueue();
  const circularQueue = new CircularQueue(5);
  const Test = new TestCircular(3);
  const list = new LinkedList();

  list.print();
  list.insert(10, 0);
  list.append(20);
  list.insert(15, 1);
  list.prepend(5);
  list.append(30);
  list.insert(25, 4);
  list.insert(55, 67);
  list.print();
  list.removeFrom(3);
  list.removeFrom(0);
  list.print();
  // list.print();

  return (
    <div>
      <div>Data Structure and Algo</div>
    </div>
  );
}

export default App;
