function volumeOfCone(radius, height) {
  const pi = 22 / 7;

  let V = (1 / 3) * pi * (radius * radius) * height;
  return Math.round(V); // returns 770 as number because orginal answer is 769.9999999999999
}

console.log(volumeOfCone(7, 15));
