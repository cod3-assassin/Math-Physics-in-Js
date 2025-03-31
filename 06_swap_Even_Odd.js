function swapEvenOdd(arr) {
  function checkArr() {
    return Array.isArray(arr) && arr.every((n) => typeof n === "number");
  }

  if (!checkArr()) {
    return "Invalid input";
  }

  // Find index of the first even and first odd number
  let evenIndex = arr.findIndex((num) => num % 2 === 0);
  let oddIndex = arr.findIndex((num) => num % 2 !== 0);

  // If both exist, swap them
  if (evenIndex !== -1 && oddIndex !== -1) {
    [arr[evenIndex], arr[oddIndex]] = [arr[oddIndex], arr[evenIndex]];
  }

  return arr;
}

console.log(swapEvenOdd([2, 3, 6, 7, 8]));
// ✅ Output: [3, 2, 6, 7, 8]

console.log(swapEvenOdd([5, 9, 11, 14, 18]));
// ✅ Output: [14, 9, 11, 5, 18]

console.log(swapEvenOdd([10, 20, 30]));
// ✅ Output: [10, 20, 30] (No odd number, remains same)

console.log(swapEvenOdd([1, 3, 5]));
// ✅ Output: [1, 3, 5] (No even number, remains same)

console.log(swapEvenOdd("not an array"));
// ❌ Output: "Invalid input"
