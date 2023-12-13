/* array is special type of varoable can hold more than one element
array methods

- length -
-toString - 
-push 
-pop 
-shift 
-unshift 
-join 
-concate
-flat
-splice
-slice
*/

const arr = ['a', 'b', 'c', 'd', 'e',];
console.log("length: " + arr.length);
console.log("toString: " + arr.toString()); 
arr.push ("app"); // add new elements in aarray
console.log(arr);
console.log(arr.join(" ")) // similar to toString method additional only specified the seperator

let newArray = arr.flat();
console.log(newArray,"new array")

const a = [1,2,3];
console.log(a);
a.pop(); // remove last element of array
console.log(a)
a.shift(); // remove first element of array
console.log(a)

const b = ['a', 'b', 'c', 'd',];
b.push("app"); // add new elements in aarray at last
console.log(b);
b.unshift("app"); // add new element in array at first
console.log(b);

// concate in arrays
const a1 = [1, 2, 3];
const a2 = ["a","b","c"];
const a3 = ["mango","apple","banana"];

const newArr = a1.concat(a2,a3); // concat always return new array
console.log(newArr)

// sort arrays
 const f = ["kiwi", "banana", "mango","apple"];
const fSort = f.sort();
console.log("sorted fruits",fSort);

// find lowest and higthest element in array
const points = [40, 100, 1, 5, 25, 10];
const lowestElement = points.sort((a,b) =>{
    return a - b;
})
console.log("lowest value : ",lowestElement[0]," ", "higthest value : ",lowestElement[points.length-1])
console.log(lowestElement,"lowest element")

// reverse arrays
console.log("reversed fruit",f.reverse());
