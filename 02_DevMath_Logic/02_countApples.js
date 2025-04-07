function countApples(baskets) {
  // Start with a counter to keep track of baskets with more than 5 apples
  let count = 0;

  // Loop through each number in the baskets array
  for (let i = 0; i < baskets.length; i++) {
    // Check if the current number of apples is more than 5
    if (baskets[i] > 5) {
      // If yes, add 1 to our counter
      count = count + 1;
    }
  }

  // Return the final count
  return count;
}

// Test Case 1
const baskets1 = [3, 7, 2, 6, 4];
console.log(countApples(baskets1)); // Output: 2

// Test Case 2
const baskets2 = [1, 2, 3];
console.log(countApples(baskets2)); // Output: 0
