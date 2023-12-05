function interst(principal, rate = 3.5, year = 5){
    // rate = rate || 3.5; 
    // year = year || 5;
    return principal * rate/100 * year;
}

const interestCal = interst(10000, 5);
console.log(interestCal);