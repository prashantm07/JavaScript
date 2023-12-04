const arr = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50];

// filter array
const filterArray = arr
  .filter((v) => v >= 10)
  .map((v) => ({ value: v }))
  .filter((obj) => obj.value >= 20);

console.log("filterArrat", filterArray);
