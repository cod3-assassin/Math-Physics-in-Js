function findGCD(a, b) {
  if (![a, b].every((n) => Number.isFinite(n) && n > 0)) {
    return "Invalid input";
  }

  while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

// console.log(findGCD(48, 18)); // ✅ Output: 6
// console.log(findGCD(101, 103)); // ✅ Output: 1 (Prime numbers)
// console.log(findGCD(56, 98)); // ✅ Output: 14
// console.log(findGCD(-5, 10)); // ❌ Output: "Invalid input"
// console.log(findGCD(270, 192)); // ✅ Output: 6

function swapMinMax(arr) {
  function checkArr() {
    return Array.isArray(arr) && arr.every((n) => typeof n === "number");
  }

  if (!checkArr()) {
    return "Invalid input"; // Stop execution if the array is invalid
  }

  let minimum = Math.min(...arr);
  let maximum = Math.max(...arr);

  let minIndex = arr.indexOf(minimum);
  let maxIndex = arr.indexOf(maximum);

  // ✅ Swap only if min and max are at different indexes
  if (minIndex !== maxIndex) {
    [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];
  }

  return arr;
}

// 🔍 Test Cases
console.log(swapMinMax([1, 2, 3])); // ✅ Output: [3, 2, 1]
console.log(swapMinMax([10, 20, 5, 30, 25])); // ✅ Output: [10, 20, 30, 5, 25]
console.log(swapMinMax([7, 7, 7])); // ✅ Output: [7, 7, 7] (No swap needed)
console.log(swapMinMax([-5, -1, -3, -10])); // ✅ Output: [-5, -10, -3, -1]
console.log(swapMinMax("hello")); // ❌ Output: "Invalid input"
