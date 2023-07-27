class CircularQueue:
    def __init__(self, capacity):
        self.capacity = capacity
        self.items = [None for x in range(capacity)]
        self.front = -1
        self.rear = -1
        self.currentLength = 0

    def isFull(self):
        return self.currentLength - self.capacity >= 0

    def isEmpty(self):
        return self.currentLength == 0

    def enqueue(self, element):
        if not self.isFull():
            self.rear = (self.rear + 1) % self.capacity
            self.items[self.rear] = element
            self.currentLength += 1
            if self.front == -1:
                self.front = self.rear
        else:
            print("Circular queue is full!")

    def dequeue(self):
        if not self.isEmpty():
            item = self.items[self.front]
            self.items[self.front] = None
            self.front = (self.front + 1) % self.capacity
            self.currentLength -= 1
            return item
        else:
            self.front = -1
            self.rear = -1
            return None

    def __str__(self):
        return str(self.items)

    def peek(self):
        if not self.isEmpty():
            return self.items[self.rear]
        else:
            print("Queue is empty.")


if __name__ == "__main__":
    Test = CircularQueue(3)
    Test.enqueue(23)
    Test.enqueue(54)
    Test.enqueue(78)
    el = Test.peek()
    print(el)
    Test.enqueue(78)
    Test.dequeue()
    el = Test.peek()
    print(el)
    Test.enqueue(999)
    Test.dequeue()
    Test.dequeue()
    el = Test.peek()
    print(el)
    Test.dequeue()
    el = Test.peek()
    print(el)
