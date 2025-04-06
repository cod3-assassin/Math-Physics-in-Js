function volumeOfFrustum(R, r, h) {
  const pi = 22 / 7;
  let largeBase = R * R;
  let smallBase = r * r;

  let V = (1 / 3) * pi * h * (largeBase + smallBase + R * r);
  return V;
}

console.log(volumeOfFrustum(10, 6, 12));
