function surfaceAreaOfCone(radius, slantHeight) {
  const pi = 22 / 7;

  return pi * radius * (radius + slantHeight);
}

console.log(surfaceAreaOfCone(7, 25));
