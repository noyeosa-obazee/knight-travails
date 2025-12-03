# Knights Travails ♞

## The Problem

Given a standard 8x8 chessboard, the goal is to find the shortest path for a Knight to move from a starting square (e.g., `[0,0]`) to a target square (e.g., `[3,3]`).

## The Solution

Since the board can be visualized as a **Graph** (where squares are nodes and moves are edges), I used a **Breadth-First Search (BFS)** algorithm.

- **Why BFS?** Unlike Depth-First Search (DFS), BFS explores the board layer-by-layer. This guarantees that the first time we reach the target, we have found the shortest possible path.
- **Data Structures:** Used a `Queue` to manage the traversal and a `Set` to track visited squares and prevent infinite loops.

## How to Run

1. Clone the repo.
2. Run `node knights.js`
