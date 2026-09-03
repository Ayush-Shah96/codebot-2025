# 🌳 DSA Growth Garden

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,100:22c55e&height=180&section=header&text=DSA%20Growth%20Garden&fontColor=ffffff&fontSize=38&fontAlignY=35&desc=One%20problem%20every%203%20hours&descAlignY=60&descSize=18" alt="DSA Growth Garden banner">
</p>

<p align="center">
  <strong>🌱 Learn a little. Solve a problem. Grow every day.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/DSA-Practice-22c55e?style=for-the-badge" alt="DSA practice">
  <img src="https://img.shields.io/badge/Updates-Every%203%20Hours-0f172a?style=for-the-badge" alt="Every 3 hours">
  <img src="https://img.shields.io/badge/Node.js-20-3b82f6?style=for-the-badge" alt="Node.js 20">
  <img src="https://img.shields.io/badge/GitHub%20Actions-Automated-8b5cf6?style=for-the-badge" alt="GitHub Actions">
</p>

---

## ✨ What is this?

This repository is a small **automated DSA practice garden**.

Every **3 hours**, GitHub Actions runs the Node.js script, picks the next problem from the DSA library, and adds it to this README.

The goal is simple:

> **Consistency beats cramming. 🌱**

## 🧭 How the garden works

```text
┌─────────────────────┐
│ GitHub Actions      │
│ Every 3 hours       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ index.js            │
│ Pick next DSA task  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ README.md           │
│ Add problem history │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Git commit + push   │
│ 🌱 Keep growing     │
└─────────────────────┘
```

## 📚 Your practice loop

**1. Understand** → **2. Solve** → **3. Optimize** → **4. Test** → **5. Explain**

For every problem, try to write down:

- Approach
- Time complexity
- Space complexity
- Edge cases
- One alternative solution

## 🌿 Problem History

<!-- DSA_HISTORY -->

---

## 🛠️ Run it locally

```bash
node index.js
```

Or:

```bash
npm run plant
```

The script updates:

- `README.md` — problem history
- `.dsa-state.json` — remembers which problem comes next

## ⚙️ Automation

The workflow lives in:

```text
.github/workflows/CI.yml
```

It is scheduled with:

```yaml
- cron: "0 */3 * * *"
```

That means GitHub schedules a run every three hours using UTC.

You can also start it manually from the **Actions** tab.

## 🌱 Philosophy

You do not need to solve 100 problems in one weekend.

Solve **one**, understand **one**, and come back for the next.

<details>
<summary><strong>🚀 Keep growing</strong></summary>

```text
🌱 Problem solved
   ↓
🌿 Concept understood
   ↓
🌳 Pattern recognized
   ↓
🌲 Interview confidence
```

</details>

<p align="center">
  Made with JavaScript, GitHub Actions, and a little persistence. 💚
</p>
