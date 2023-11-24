const a = 500;
const b = 500;

// if (a === b) {
//   console.log("t");
// } else {
//   console.log(false);
// }

// when we uae new keyword then ita allocate new memory location and === compaire object and its return false even number also same
const c = new Number(100); 
const d = new Number(500);

if (c.valueOf() == d.valueOf()) {
  console.log(true);
} else {
  console.log(false);
}
