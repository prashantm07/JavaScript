// toString : its return number as a string
// toExponential : with a number rounded and written using exponential notation         
// toFixed : number written with a specified number of decimals

// Number.toString() method:
const num = 42;
const str = num.toString();
console.log(typeof str); // String

// Number.toFixed() method:
const num1 = 10.546534;
const fixedNum = num1.toFixed(2);
console.log("toFixed : ",fixedNum)

// Number.toPrecision() method:
const num2 = 10.546534;
const precisionNum = num2.toPrecision(2);
console.log("toPrecision : ",precisionNum);

// Number.toExponential() method:
const num3 = 10.546534;
const expoNum = num3.toExponential(5);
console.log("toExponential : ",expoNum);

// Number.parseFloat() and Number.parseInt() methods:
const floatString = "10.354";
const integerString ="10";

const floatNum = Number.parseFloat(floatString);
const integerNum = Number.parseInt(integerString);

console.log("parseFloat : ",floatNum,"parseInt : ",integerNum);

// 