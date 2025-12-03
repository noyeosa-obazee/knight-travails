function knightMoves(start, end) {
  // 1. DEFINE THE BOARD BOUNDARIES AND MOVES
  // A knight always has these 8 relative moves (x, y)
  const directions = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  // Helper to check if a move stays on the 8x8 board
  function isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  // 2. SETUP FOR BFS (Breadth-First Search)

  // The Queue: Stores PATHS, not just single squares.
  // We will start with a path containing only the starting square.
  const queue = [[start]];

  // The Visited Set: Keeps track of the squares we've already seen.
  // We store them as strings "x,y" because Javascript can't compare arrays easily.
  const visited = new Set();
  visited.add(start.toString()); // Mark start as visited

  // 3. THE SEARCH LOOP
  while (queue.length > 0) {
    // shift() removes the first item from the queue (FIFO)
    const currentPath = queue.shift();

    // The current position is the LAST square in the current path
    const currentPos = currentPath[currentPath.length - 1];
    const [currentX, currentY] = currentPos;

    // 4. CHECK FOR WIN
    // If coordinates match the end target...
    if (currentX === end[0] && currentY === end[1]) {
      printResult(currentPath);
      return currentPath;
    }

    // 5. FIND NEIGHBORS
    // Loop through all 8 possible knight moves
    for (const [dx, dy] of directions) {
      const nextX = currentX + dx;
      const nextY = currentY + dy;

      // If the move is on the board and we haven't visited it yet...
      if (isValid(nextX, nextY) && !visited.has(`${nextX},${nextY}`)) {
        // Mark as visited so we don't process it again
        visited.add(`${nextX},${nextY}`);

        // Create a new path by copying the old one and adding the new step
        const newPath = [...currentPath, [nextX, nextY]];

        // Add this new path to the queue to be process later
        queue.push(newPath);
      }
    }
  }
}

// Helper function to print output
function printResult(path) {
  console.log(`=> You made it in ${path.length - 1} moves! Here's your path:`);
  path.forEach((pos) => console.log(pos));
}

knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
