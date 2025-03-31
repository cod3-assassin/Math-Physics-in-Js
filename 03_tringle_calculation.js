function calculateTriangle(a, b, c) {
  // Step 1: Check if the sides form a valid triangle
  if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
    console.log("Invalid triangle sides");
    return;
  }

  // Step 2: Calculate semi-perimeter
  let semi_perimeter = (a + b + c) / 2;

  // Step 3: Apply Heron's formula
  let areaSquared =
    semi_perimeter *
    (semi_perimeter - a) *
    (semi_perimeter - b) *
    (semi_perimeter - c);

  // Step 4: Implement manual square root function
  function customSqrt(n) {
    if (n < 0) return NaN; // Handle negative values
    let x = n;
    let y = 1;
    let precision = 0.00001;

    while (x - y > precision) {
      x = (x + y) / 2;
      y = n / x;
    }
    return x;
  }

  // Step 5: Calculate and display the area
  let area = customSqrt(areaSquared);
  console.log("Triangle Area:", area);
}

// Test cases
calculateTriangle(3, 4, 5); // Should print the correct area
calculateTriangle(10, 10, 10); // Equilateral triangle
calculateTriangle(-1, 2, 3); // Invalid input
calculateTriangle(1, 2, 10); // Invalid triangle
