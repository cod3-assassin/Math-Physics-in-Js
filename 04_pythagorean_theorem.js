function checkPythagorean(a, b, c) {
  // ✅ 1. Input validation
  if (![a, b, c].every((n) => Number.isFinite(n) && n > 0)) {
    return "Invalid input. All numbers must be positive.";
  }

  // ✅ 2. Determine the hypotenuse dynamically
  let hypotenuse = Math.max(a, b, c);
  let [side1, side2] = [a, b, c].filter((n) => n !== hypotenuse);

  // ✅ 3. Check Triangle Inequality Theorem
  if (side1 + side2 <= hypotenuse) {
    return "These sides do not form a valid triangle.";
  }

  // ✅ 4. Check Pythagorean Theorem
  if (side1 ** 2 + side2 ** 2 === hypotenuse ** 2) {
    return "This is a valid Pythagorean triplet.";
  } else {
    return "This is NOT a Pythagorean triplet.";
  }
}

// 🔍 Test Cases
console.log(checkPythagorean(3, 4, 5)); // ✅ "This is a valid Pythagorean triplet."
console.log(checkPythagorean(5, 12, 13)); // ✅ "This is a valid Pythagorean triplet."
console.log(checkPythagorean(6, 8, 11)); // ❌ "This is NOT a Pythagorean triplet."
console.log(checkPythagorean(-3, 4, 5)); // ❌ "Invalid input. All numbers must be positive."
console.log(checkPythagorean(1, 2, 3)); // ❌ "These sides do not form a valid triangle."
