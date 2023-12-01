// const person = {

//     fName : "abc",
//     lastName : "xyz",
//     age : 54
// }
// console.log(person.fName);
// console.log(person["fName"]);
// console.log(person)

// const circle = {
//     radius : 10,
//     lacation : {
//         x : 2,
//         y : 5
//     },
//     isVisible : true,
//     draw : ()=>{
//         console.log("draw function");

//     }
// };
// console.log(circle.draw());

// factory function
function createCircle(radius){
    return {
        radius, // or radius : radius 
        draw (){
            console.log("draw");
        }
    };
}
const c1 = createCircle(110);
// const c2 = createCircle(10);
console.log(c1);

// Custructor function

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw")
    }
}

const c = new Circle(1);
// console.log(c);