// String tamplate use both double and single quotes
let str = `hello prashant "hi" 'hi'`;
// String template allow to multiline strings
let s = `hello
prahant
from km
`;
console.log(s)
console.log(str);

// Interpolaton
// syntax is  ${...}

// variable interpolation
let fName = "prashant";
let lastName = "mane";
let text = `hello ${fName} ${lastName}.`
console.log(text);
// Expression substitution
let price = 2.5005;
let vat = 2;
let total = `total ${(price*(1+vat)).toFixed(2)}`;
console.log(total)