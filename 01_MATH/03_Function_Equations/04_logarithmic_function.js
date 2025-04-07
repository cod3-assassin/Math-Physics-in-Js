function calculateHours(finalPopulation) {
  return Math.log2(finalPopulation / 10000);
}

console.log(calculateHours(80000)); // Should return 3
