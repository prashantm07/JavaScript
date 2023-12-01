/*
array methods
- length
-toString
-push
-pop
-shift
-unshift
-join 
-delete
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