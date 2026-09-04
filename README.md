# 🧠 DSA Algorithm of the Moment

> Automatically updated every 3 hours 🤖

## 📌 Heap Sort

**Category:** Sorting

**Updated:** Fri, 04 Sep 2026 12:44:30 GMT

### 💻 JavaScript Implementation

```javascript
function heapSort(arr) {
  const result = [...arr];

  function heapify(n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && result[left] > result[largest]) {
      largest = left;
    }

    if (right < n && result[right] > result[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [result[i], result[largest]] = [result[largest], result[i]];
      heapify(n, largest);
    }
  }

  for (let i = Math.floor(result.length / 2) - 1; i >= 0; i--) {
    heapify(result.length, i);
  }

  for (let i = result.length - 1; i > 0; i--) {
    [result[0], result[i]] = [result[i], result[0]];
    heapify(i, 0);
  }

  return result;
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
