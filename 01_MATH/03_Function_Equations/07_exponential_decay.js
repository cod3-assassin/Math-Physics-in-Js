function calculateRemainingSubstance(initial, k, t) {
  return initial * Math.exp(-k * t);
}

console.log(calculateRemainingSubstance(100, 0.1, 5));
