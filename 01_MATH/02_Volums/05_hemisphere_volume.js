function volumeOfHemisphere(radius) {
  const pi = 22 / 7;

  let V = (2 / 3) * pi * (radius * radius * radius);

  return V;
}

console.log(volumeOfHemisphere(7));
