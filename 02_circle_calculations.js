function calculateCircle(radius) {
  if (typeof radius !== "number") {
    console.log("Invalid Input");
    return;
  }
  if (radius < 0) {
    console.log("Invalid radius");
    return;
  }
  if (radius === 0) {
    console.log("Radius: 0");
    console.log("Diameter: 0");
    console.log("Circumference: 0");
    console.log("Area: 0");
    return; // Stop further execution
  }

  var pi = 22 / 7; // Define once

  var diameter = 2 * radius;
  var circumference = 2 * pi * radius;
  var area = pi * radius * radius;

  console.log("Radius:", radius);
  console.log("Diameter:", diameter.toFixed(2));
  console.log("Circumference:", circumference.toFixed(2));
  console.log("Area:", area.toFixed(2));
}

// Test cases
calculateCircle(4);
calculateCircle(20);
calculateCircle(-1);
calculateCircle(0);
calculateCircle("Hello");
