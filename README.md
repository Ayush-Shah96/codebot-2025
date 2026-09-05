# 🧠 DSA Algorithm of the Moment

> Automatically updated every 3 hours 🤖

## 📌 Two Sum

**Category:** Arrays

**Updated:** Sat, 05 Sep 2026 17:09:32 GMT

### 💻 JavaScript Implementation

```javascript
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
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
