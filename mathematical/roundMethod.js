// math Round
const num = 9.9;
const num1  = -9.999

const roundNum = Math.round(num); //  rounds to the nearest integer. if decimal point is .5 or greater
const ceilNum = Math.ceil(num); // always round up
const floorNum = Math.floor(num); //  always rounds down
const truncMath = Math.trunc(num); // retrurn integer part of number
const signNum = Math.sign(num1); // return positive(1) negative(-1) and zero(0) 
const powNum = Math.pow(10,2); // value of x power of y
const sqtrNumm = Math.sqrt(num); // square root of number
const absNum =  Math.abs(num1); // return absolute(+ve value) value of number

console.log("Round Method : ",roundNum);
console.log("ceil Method : ",ceilNum);
console.log("floor Method : ",floorNum);
console.log("trunc Method : ",truncMath);
console.log("sign Method : ",signNum);
console.log("pow Method : ",powNum);
console.log("squire root  Method : ",sqtrNumm.toFixed(2));
console.log("absolute value of number is : ",absNum);