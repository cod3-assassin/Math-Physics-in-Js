function groupNumbers(arr) {
  function checkValidation() {
    return Array.isArray(arr) && arr.every((n) => typeof n === "number");
  }

  if (!checkValidation()) {
    return "Invalid input";
  }

  var multiplesOf3 = [];
  var multiplesOf5 = [];

  arr.forEach((num) => {
    if (num % 3 === 0) {
      multiplesOf3.push(num);
    }
    if (num % 5 === 0) {
      multiplesOf5.push(num);
    }
  });

  let indexesOf3 = multiplesOf3.map((num) => arr.indexOf(num));
  let indexesOf5 = multiplesOf5.map((num) => arr.indexOf(num));

  var others = arr.filter(
    (num) => !multiplesOf3.includes(num) && !multiplesOf5.includes(num),
  );

  // Swap numbers at their positions
  if (indexesOf3.length > 0 && indexesOf5.length > 0) {
    for (let i = 0; i < Math.min(indexesOf3.length, indexesOf5.length); i++) {
      let temp = arr[indexesOf3[i]];
      arr[indexesOf3[i]] = arr[indexesOf5[i]];
      arr[indexesOf5[i]] = temp;
    }
  }

  console.log("Final Array:", arr);
  return arr;
}

console.log(groupNumbers([2, 3, 4, 5, 6, 27, 50]));
