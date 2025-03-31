/**
 * Challenge: Square Root & Cube Root (Without Built-in Methods)
 *
 * Objective:
 * - Write a function that calculates the square root and cube root of a given number
 *   WITHOUT using Math.sqrt() or Math.cbrt().
 *
 * Requirements:
 * 1. Implement square root calculation using **Newton’s Method**:
 *    - Formula:
 *      x = (x + (n / x)) / 2
 *    - Repeat until the difference is very small (precision threshold).
 *
 * 2. Implement cube root calculation using **Newton’s Method**:
 *    - Formula:
 *      x = (2 * x + (n / (x * x))) / 3
 *    - Repeat until the difference is very small (precision threshold).
 *
 * 3. Handle edge cases:
 *    - If the input is not a number, print an error message.
 *    - If the input is negative:
 *        - Square root should return "Not a real number".
 *        - Cube root should still return a valid number.
 *    - If the input is zero, return 0 for both roots.
 *
 * 4. Display the results in a readable format.
 *
 * Example Output:
 * ----------------
 * Enter a number: 8
 * Square Root of 8: 2.828
 * Cube Root of 8: 2
 *
 * Enter a number: -9
 * Square Root of -9: Not a real number
 * Cube Root of -9: -2.08
 *
 * Enter a number: "hello"
 * Invalid input! Please enter a valid number.
 */

function squareRoot(n) {
  if (n < 0) return "Not a real number"; // No real square root for negative numbers
  if (n === 0) return 0;

  let guess = n / 2;
  let epsilon = 0.00001; // Precision threshold

  while (Math.abs(guess * guess - n) > epsilon) {
    guess = (guess + n / guess) / 2; // Newton's method formula
  }
  return guess;
}

function cubeRoot(n) {
  if (n === 0) return 0;

  let guess = n / 3;
  let epsilon = 0.00001;

  while (Math.abs(guess * guess * guess - n) > epsilon) {
    guess = (2 * guess + n / (guess * guess)) / 3;
  }
  return guess;
}

function SquareCubeRoot(n) {
  if (typeof n !== "number") {
    console.log("Please enter a valid number");
    return;
  }

  let square = squareRoot(n);
  let cube = cubeRoot(n);

  console.log(`Square Root of ${n}:`, square);
  console.log(`Cube Root of ${n}:`, cube);
}

SquareCubeRoot(8);
SquareCubeRoot(-1);
SquareCubeRoot("hello");
