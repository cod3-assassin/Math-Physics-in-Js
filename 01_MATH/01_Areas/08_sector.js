function areaOfSector(radius, angle) {
  const π = 22 / 7;
  const θ = angle / 360;
  const area = θ * π * radius * radius;

  return area;
}

console.log(areaOfSector(14, 60));
