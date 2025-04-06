function volumeOfSphere(radius) {
  const pi = 22 / 7;

  let V = (4 / 3) * pi * (radius * radius * radius);

  return V;
}

console.log(volumeOfSphere(7));
