function surfaceAreaOfCuboid(length, width, height) {
  let lw = 2 * length * width;
  let lh = 2 * length * height;
  let wh = 2 * width * height;

  return lw + lh + wh;
}

console.log(surfaceAreaOfCuboid(8, 5, 4));
