const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

// spread operator

// console.log(...q1);
// console.log(q1);

// rest Operators
function data(firstNamr, lastNamr, ...otherInfo) {

    return firstNamr+" "+lastNamr+" "+otherInfo
}

const myData = data('prashant','kumar','web developer','male');
console.log(myData);
