class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None
        self.size = 0

    def isEmpty(self):
        return self.size == 0

    def showSize(self):
        return self.size

    def append(self, value):
        node = Node(value)
        if self.isEmpty():
            self.head = node
        else:
            prevPointer = self.head
            while prevPointer.next:
                prevPointer = prevPointer.next
            prevPointer.next = node
        self.size += 1


    def removeFrom(self, index):
        if index < 0 or index >= self.size:
            return None
        removedNode = None
        if index == 0:
            removedNode = self.head
            self.head = self.head.next
        else:
            prevPointer = self.head
            for i in range(index - 1):
                prevPointer = prevPointer.next
            removedNode = prevPointer.next
            prevPointer.next = removedNode.next
        self.size -= 1
        return removedNode.value

    def removeValue(self, value):
        if self.isEmpty():
            return None
        if self.head.value == value:
            self.head = self.head.next
            self.size -= 1
            return value
        else:
            prevPointer = self.head
            while prevPointer.next and prevPointer.next.value != value:
                prevPointer = prevPointer.next
            if prevPointer.next:
                removedNode = prevPointer.next
                prevPointer.next = removedNode.next
                self.size -= 1
                return value
            return None

    def search(self, value):
        if self.isEmpty():
            return -1
        else:
            currPointer = self.head
            index = 0
            while currPointer:
                if currPointer.value == value:
                    return index
                currPointer = currPointer.next
                index += 1
            return -1

    def reverse(self):
        currPointer = self.head
        prevPointer = None
        while currPointer:
            nextPointer = currPointer.next
            currPointer.next = prevPointer
            prevPointer = currPointer
            currPointer = nextPointer
        self.head = prevPointer


    def prepend(self, value):
        node = Node(value)
        if self.isEmpty():
            self.head = node
        else:
            node.next = self.head
            self.head = node
        self.size += 1

    def insert(self, value, index):
        if index < 0 or index > self.size:
            return
        if index == 0:
            self.append(value)
        else:
            node = Node(value)
            prevPointer = self.head
            for i in range(index - 1):
                prevPointer = prevPointer.next
            node.next = prevPointer.next
            prevPointer.next = node
            self.size += 1

    def __str__(self):
        if self.isEmpty():
            return "Linked list is empty."
        else:
            currPointer = self.head
            listValue = ""
            while currPointer:
                listValue += f"{currPointer.value} "
                currPointer = currPointer.next
            return listValue


if __name__ == "__main__":
    linked_list = LinkedList()
    print(linked_list)
    linked_list.insert(10, 0)
    linked_list.append(20)
    linked_list.insert(15, 1)
    linked_list.prepend(5)
    linked_list.append(30)
    linked_list.insert(25, 4)
    linked_list.insert(55, 65)
    print(linked_list)
    linked_list.removeFrom(3)
    linked_list.removeFrom(0)
    linked_list.removeValue(25)
    linked_list.reverse()
    print(linked_list)
