// for of uses iterate String array or other iterable collection
const arr = [1, 23, 4, 54, 6, 78];

// simple for loop
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

// for OF loop
for (let value of arr) {
  console.log(value);
}

// String for of
const str = "prashant";
let count =0;
let letter = 'a'
for (let char of str) {
  if(char == letter){
    count++;
  }
}
console.log("count",count);

// set example
const mySet = new Set([1, 2, 4, 5, 6, 7, 8]);
for (let set of mySet) {
  // console.log("set", set);
}

// map example
const myMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["d", 4],
]);

for (const [key, value] of myMap) {
  console.log(`${key}`, `${value}`);
}
