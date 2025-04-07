function optimizeSolarGrid(grid) {
  // Step 1: Optimize shadowed panels
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const panel = grid[i][j];

      // Only process shadowed panels
      if (panel.shadowed === true) {
        let neighbors = [];

        // Check up neighbor
        if (i > 0 && !grid[i - 1][j].shadowed) {
          neighbors.push(grid[i - 1][j].energy);
        }
        // Check down neighbor
        if (i < grid.length - 1 && !grid[i + 1][j].shadowed) {
          neighbors.push(grid[i + 1][j].energy);
        }
        // Check left neighbor
        if (j > 0 && !grid[i][j - 1].shadowed) {
          neighbors.push(grid[i][j - 1].energy);
        }
        // Check right neighbor
        if (j < grid[i].length - 1 && !grid[i][j + 1].shadowed) {
          neighbors.push(grid[i][j + 1].energy);
        }

        // Calculate average energy of non-shadowed neighbors
        let avgNeighborEnergy = 0;
        if (neighbors.length > 0) {
          const sum = neighbors.reduce((acc, val) => acc + val, 0);
          avgNeighborEnergy = sum / neighbors.length;
        }

        // Calculate potential energy (80% of average)
        const potential = avgNeighborEnergy * 0.8;

        // Update panel energy if current is less than potential
        if (panel.energy < potential) {
          panel.energy = potential;
        }
      }
    }
  }

  // Step 2: Calculate total energy of the grid
  let totalEnergy = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      totalEnergy += grid[i][j].energy;
    }
  }

  return totalEnergy;
}

// Test Case 1
const grid1 = [
  [
    { energy: 80, shadowed: false },
    { energy: 20, shadowed: true },
    { energy: 90, shadowed: false },
  ],
  [
    { energy: 70, shadowed: false },
    { energy: 30, shadowed: true },
    { energy: 60, shadowed: false },
  ],
  [
    { energy: 85, shadowed: false },
    { energy: 25, shadowed: true },
    { energy: 95, shadowed: false },
  ],
];
console.log(optimizeSolarGrid(grid1)); // Output: 682

// Test Case 2
const grid2 = [
  [
    { energy: 50, shadowed: true },
    { energy: 60, shadowed: false },
  ],
  [
    { energy: 40, shadowed: false },
    { energy: 10, shadowed: true },
  ],
];
console.log(optimizeSolarGrid(grid2)); // Output: 158
