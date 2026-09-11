# 🧠 DSA Algorithm of the Moment

> Automatically updated every 3 hours 🤖

## 📌 Dijkstra's Algorithm

**Category:** Graph

**Updated:** Fri, 11 Sep 2026 15:55:01 GMT

### 💻 JavaScript Implementation

```javascript
function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();

  for (const node in graph) {
    distances[node] = Infinity;
  }

  distances[start] = 0;

  while (visited.size < Object.keys(graph).length) {
    let current = null;

    for (const node in distances) {
      if (
        !visited.has(node) &&
        (current === null || distances[node] < distances[current])
      ) {
        current = node;
      }
    }

    if (current === null) break;

    visited.add(current);

    for (const neighbor in graph[current]) {
      const distance =
        distances[current] + graph[current][neighbor];

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
      }
    }
  }

  return distances;
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
