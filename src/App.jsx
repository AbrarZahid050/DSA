import { Stack } from "./stack/Stack";
import { Queue } from "./queue/Queue";
import { EfficientQueue } from "./queue/EfficientQueue";
import "./App.css";

function App() {
  const stack = new Stack();
  const queue = new Queue();
  const efficientQueue = new EfficientQueue();

  return (
    <div>
      <div>Data Structure and Algo</div>
    </div>
  );
}

export default App;
