// File Name: 03_findFullBoxes.js

function findFullBoxes(boxes) {
  let count = 0; // Start with a counter at 0

  for (let i = 0; i < boxes.length; i++) {
    // Loop through each box
    if (boxes[i] === 10) {
      // Check if the number of cars is exactly 10
      count = count + 1; // Add 1 to the counter if true
    }
  }
  return count; // Return the total count of full boxes
}

// Test Case 1
const boxes = [5, 10, 3, 10, 8];
console.log(findFullBoxes(boxes)); // Output: 2 (only 10 and 10 are counted)

// Test Case 2
const boxes2 = [7, 4, 2];
console.log(findFullBoxes(boxes2)); // Output: 0 (none are exactly 10)
