from queue import LifoQueue, Queue

stack = LifoQueue(maxsize=3)  # last-in first out.
Q = Queue(maxsize=3)  # first-in and first-out.

stack.put("a")
stack.put("b")
stack.put("e")

Q.put("a")
Q.put("b")
Q.put("e")
print(Q.qsize())
print(Q.get())
print(Q.qsize())
