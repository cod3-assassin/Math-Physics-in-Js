function areaOfPolygon(sides, sideLength, apothem) {
  const perimeter = sides * sideLength;
  return (perimeter * apothem) / 2;
}

console.log(areaOfPolygon(6, 8, 6.93)); // 166.32
