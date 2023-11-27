const circle = {
    radius :1
}

circle.colour = 'yellow'
circle.draw =  ()=>{
    console.log("draw")
}
console.log(circle);

delete circle.colour;

console.log(circle);

// value reference 

let number = {value :20};

function increse(number){
    number.value++;
}

increse(number);
console.log(number);