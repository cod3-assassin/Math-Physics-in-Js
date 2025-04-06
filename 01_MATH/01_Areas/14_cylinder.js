function surfaceAreaOfCylinder(radius, height) {
  const pi = 22 / 7;

  let AreaOfTowCircle = radius * radius * pi * 2;
  let AreaOfCurvedSurface = 2 * pi * radius * height;

  return AreaOfTowCircle + AreaOfCurvedSurface;
}

console.log(surfaceAreaOfCylinder(7, 20));
