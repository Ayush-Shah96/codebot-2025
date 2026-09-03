const fs = require("fs");

const algorithms = [
  {
    name: "Binary Search",
    category: "Searching",
    code: `
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
`,
  },

  {
    name: "Bubble Sort",
    category: "Sorting",
    code: `
function bubbleSort(arr) {
  const result = [...arr];

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }

  return result;
}
`,
  },

  {
    name: "Selection Sort",
    category: "Sorting",
    code: `
function selectionSort(arr) {
  const result = [...arr];

  for (let i = 0; i < result.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }

    [result[i], result[minIndex]] = [result[minIndex], result[i]];
  }

  return result;
}
`,
  },

  {
    name: "Insertion Sort",
    category: "Sorting",
    code: `
function insertionSort(arr) {
  const result = [...arr];

  for (let i = 1; i < result.length; i++) {
    const current = result[i];
    let j = i - 1;

    while (j >= 0 && result[j] > current) {
      result[j + 1] = result[j];
      j--;
    }

    result[j + 1] = current;
  }

  return result;
}
`,
  },

  {
    name: "Merge Sort",
    category: "Sorting",
    code: `
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}
`,
  },

  {
    name: "Quick Sort",
    category: "Sorting",
    code: `
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
`,
  },

  {
    name: "Heap Sort",
    category: "Sorting",
    code: `
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
`,
  },

  {
    name: "Depth First Search",
    category: "Graph Traversal",
    code: `
function dfs(graph, start, visited = new Set()) {
  if (visited.has(start)) return;

  visited.add(start);
  console.log(start);

  for (const neighbor of graph[start]) {
    dfs(graph, neighbor, visited);
  }
}
`,
  },

  {
    name: "Breadth First Search",
    category: "Graph Traversal",
    code: `
function bfs(graph, start) {
  const queue = [start];
  const visited = new Set([start]);

  while (queue.length > 0) {
    const node = queue.shift();

    console.log(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
`,
  },

  {
    name: "Dijkstra's Algorithm",
    category: "Graph",
    code: `
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
`,
  },

  {
    name: "Fibonacci",
    category: "Dynamic Programming",
    code: `
function fibonacci(n) {
  if (n <= 1) return n;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}
`,
  },

  {
    name: "Kadane's Algorithm",
    category: "Arrays",
    code: `
function maxSubarraySum(arr) {
  let current = arr[0];
  let maximum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    current = Math.max(arr[i], current + arr[i]);
    maximum = Math.max(maximum, current);
  }

  return maximum;
}
`,
  },

  {
    name: "Two Sum",
    category: "Arrays",
    code: `
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
`,
  },

  {
    name: "Sliding Window",
    category: "Arrays",
    code: `
function maxSumSubarray(arr, k) {
  if (arr.length < k) return null;

  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maximum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maximum = Math.max(maximum, windowSum);
  }

  return maximum;
}
`,
  },

  {
    name: "Valid Parentheses",
    category: "Stack",
    code: `
function isValid(s) {
  const stack = [];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "["
  };

  for (const char of s) {
    if (["(", "{", "["].includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
`,
  },

  {
    name: "Reverse Linked List",
    category: "Linked List",
    code: `
function reverseLinkedList(head) {
  let previous = null;
  let current = head;

  while (current !== null) {
    const next = current.next;

    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}
`,
  },

  {
    name: "Detect Cycle in Linked List",
    category: "Linked List",
    code: `
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
`,
  },

  {
    name: "Binary Tree Inorder Traversal",
    category: "Binary Tree",
    code: `
function inorderTraversal(root) {
  const result = [];

  function traverse(node) {
    if (!node) return;

    traverse(node.left);
    result.push(node.value);
    traverse(node.right);
  }

  traverse(root);

  return result;
}
`,
  },

  {
    name: "Binary Tree Level Order Traversal",
    category: "Binary Tree",
    code: `
function levelOrder(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      level.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}
`,
  },

  {
    name: "Greatest Common Divisor",
    category: "Math",
    code: `
function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }

  return Math.abs(a);
}
`,
  },

  {
    name: "Sieve of Eratosthenes",
    category: "Math",
    code: `
function findPrimes(n) {
  const isPrime = Array(n + 1).fill(true);

  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime
    .map((value, index) => (value ? index : null))
    .filter(value => value !== null);
}
`,
  },

  {
    name: "Topological Sort",
    category: "Graph",
    code: `
function topologicalSort(graph) {
  const visited = new Set();
  const result = [];

  function dfs(node) {
    if (visited.has(node)) return;

    visited.add(node);

    for (const neighbor of graph[node] || []) {
      dfs(neighbor);
    }

    result.push(node);
  }

  for (const node in graph) {
    dfs(node);
  }

  return result.reverse();
}
`,
  },

  {
    name: "Union Find",
    category: "Disjoint Set",
    code: `
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
`,
  },
];

// Pick a random algorithm
const randomAlgorithm =
  algorithms[Math.floor(Math.random() * algorithms.length)];

const now = new Date();

const readme = `# 🧠 DSA Algorithm of the Moment

> Automatically updated every 3 hours 🤖

## 📌 ${randomAlgorithm.name}

**Category:** ${randomAlgorithm.category}

**Updated:** ${now.toUTCString()}

### 💻 JavaScript Implementation

\`\`\`javascript
${randomAlgorithm.code.trim()}
\`\`\`

---

### 📚 Algorithms in Rotation

${algorithms.map((algorithm, index) =>
  `${index + 1}. ${algorithm.name} — ${algorithm.category}`
).join("\n")}

---

⭐ **Keep learning. Keep solving. Keep coding.**
`;

fs.writeFileSync("README.md", readme);

console.log(`README updated with: ${randomAlgorithm.name}`);
