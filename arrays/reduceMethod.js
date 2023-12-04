const number = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50];
const sum = number.reduce((accumulator , currentValue) => accumulator + currentValue);
console.log(sum);