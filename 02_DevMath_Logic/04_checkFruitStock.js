function checkFruitStock(crates) {
  let Low = 0;
  let High = 0;

  for (let i = 0; i < crates.length; i++) {
    if (crates[i] >= 10) {
      High++;
    } else if (crates[i] <= 5) {
      Low++;
    }
  }
  return console.log(`Low :${Low}  High:${High}`);
}

const crates = [3, 12, 7, 10, 2];

checkFruitStock(crates);
