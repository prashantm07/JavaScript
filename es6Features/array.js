// array form
const a = "prashant";

// return array object from any object wich has size property or iterable
const arr = Array.from(a);
console.log(arr);

const letters = ['a', 'b', 'c', 'd'];

// arrays of keys of an arrays 
const keys = letters.keys()
let text ='';
 for( let x of keys){
    text += x;
 }
 console.log(text);

//  find

const number = [11, 25, 30, 45, 50, 65];

// find 1st element 
const first = number.find((element)=> element >25 );
console.log("first element greater  : ",first); // 30

// find 1st even elemet
const evenEle = number.find((element)=> element % 2 == 0)
console.log("1st Even elemet : ",evenEle)

// find By index 
// find 1st element of index
const index = number.findIndex((element)=> element >25 );
console.log("first element index greater  : ",index); // 2

// even element index
const evenIndex = number.findIndex((element)=> element % 2 == 0);
console.log("event element index is : ",evenIndex);