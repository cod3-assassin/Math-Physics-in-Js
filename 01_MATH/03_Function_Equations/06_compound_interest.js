function calculateCompoundInterest(
  principal,
  ratePercent,
  compoundsPerYear,
  years,
) {
  const rate = ratePercent / 100; // convert 6% → 0.06
  const base = 1 + rate / compoundsPerYear;
  const exponent = compoundsPerYear * years;
  return principal * Math.pow(base, exponent);
}

console.log(calculateCompoundInterest(5000, 5, 6, 5));
