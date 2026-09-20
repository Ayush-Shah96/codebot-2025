# 🧠 DSA Algorithm of the Moment

> Automatically updated every 3 hours 🤖

## 📌 Union Find

**Category:** Disjoint Set

**Updated:** Sun, 20 Sep 2026 22:59:36 GMT

### 💻 JavaScript Implementation

```javascript
class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = Array(n).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }

    return this.parent[x];
  }

  union(a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);

    if (rootA === rootB) return false;

    if (this.rank[rootA] < this.rank[rootB]) {
      this.parent[rootA] = rootB;
    } else if (this.rank[rootA] > this.rank[rootB]) {
      this.parent[rootB] = rootA;
    } else {
      this.parent[rootB] = rootA;
      this.rank[rootA]++;
    }

    return true;
  }
}
```

---

### 📚 Algorithms in Rotation

1. Binary Search — Searching
2. Bubble Sort — Sorting
3. Selection Sort — Sorting
4. Insertion Sort — Sorting
5. Merge Sort — Sorting
6. Quick Sort — Sorting
7. Heap Sort — Sorting
8. Depth First Search — Graph Traversal
9. Breadth First Search — Graph Traversal
10. Dijkstra's Algorithm — Graph
11. Fibonacci — Dynamic Programming
12. Kadane's Algorithm — Arrays
13. Two Sum — Arrays
14. Sliding Window — Arrays
15. Valid Parentheses — Stack
16. Reverse Linked List — Linked List
17. Detect Cycle in Linked List — Linked List
18. Binary Tree Inorder Traversal — Binary Tree
19. Binary Tree Level Order Traversal — Binary Tree
20. Greatest Common Divisor — Math
21. Sieve of Eratosthenes — Math
22. Topological Sort — Graph
23. Union Find — Disjoint Set

---

⭐ **Keep learning. Keep solving. Keep coding.**
