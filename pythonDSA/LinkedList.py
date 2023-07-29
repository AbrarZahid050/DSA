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
            print("Linked list is empty.")
        else:
            currPointer = self.head
            listValue = ""
            while currPointer:
                listValue += f"{currPointer.value} "
                currPointer = currPointer.next
            return listValue


if __name__ == "__main__":
    linked_list = LinkedList()
    linked_list.append(10)
    linked_list.append(20)
    linked_list.append(30)
    linked_list.append(40)
    linked_list.append(50)
    linked_list.insert(55, 4)
    print(linked_list)
