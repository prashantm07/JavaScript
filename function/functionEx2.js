// Using Arrow Functions
const multiply = (a, b)=> {
    b =  typeof b !== 'undefined' ? b : 1
    return a *b;
}

console.log(multiply(78));


/********** */
// normal Way 
function multiply(a, b) {
    b =  typeof b !== 'undefined' ? b : 1
    return a *b;
}

console.log(multiply(78));