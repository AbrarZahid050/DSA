from collections import (
    Counter,
    OrderedDict,
    defaultdict,
    ChainMap,
    namedtuple,
    deque,
    UserList,
)

l = ["a", "b", "c", "a", "a", "b", "b", "b"]
count = Counter(l)
count.update("c")
od = OrderedDict()
od["a"] = 1
od["b"] = 2
od["c"] = 0
od["d"] = 1
for x, v in od.items():
    print(x, v)


dd = defaultdict(int)
L = [1, 2, 3, 3, 1, 2, 3, 1, 1, 2, 3]
for x in L:
    dd[x] += 1
print(dd)

d1 = {"a": 4, "b": 3}
d2 = {"c": 41, "d": 23}
d3 = {"e": 54, "f": 63}
chain = ChainMap(d1, d2, d3)
print(chain["d"])


Student = namedtuple("Student", ["name", "age", "DOB"])
s = Student("abrar", "32", "27111990")
print(s.name)

print("-" * 20)

de = deque([1, 2, 3, 4])
de.append(6)
de.popleft()
print(de)

print("-" * 20)


class myList(UserList):
    def pop(self, s=None):
        raise RuntimeError("Deletion is not allowed!")


l = myList([1, 2, 3, 4])
l.append(33)
print(l)
