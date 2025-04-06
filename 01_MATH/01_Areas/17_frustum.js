function surfaceAreaOfFrustum(R, r, l) {
  const pi = 22 / 7;

  let CurvedSurface = pi * (R + r) * l;
  let AreaOfLargebasse = pi * R * R;
  let AreaOfSmallTop = pi * r * r;

  return CurvedSurface + AreaOfLargebasse + AreaOfSmallTop;
}

console.log(surfaceAreaOfFrustum(10, 6, 12));
