// "use strict";
// function toCelsius(fahrenheit) {
//     return (5/7) *(fahrenheit);
// }
// const cel = toCelsius(4550).toFixed(3);
// console.log(cel);

// function declearation
function walk(){
    console.log("run")
}
// function expression
// anonymous function
const run = ()=>{
    console.log('walk')
}
let move = run;
move();
walk();
run();