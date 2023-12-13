// creating new map
let map = new Map();

//  set map values

map.set(1, "prashant");
map.set(2, "ram");
map.set(3, "sham");
map.set(4, "om");
map.set(5, "rahul");

// // Using for of loop
// for (let [key, value] of map) {
//   console.log(`${key} ${value}`);
// }



//get element from map 
console.log(map.get(1));

// delete element from map
console.log(map.delete(2));

// clear all elements
map.clear()

// size of map
console.log(map.size);

// type of map (return object)
console.log(typeof map);

// cheaking perticular object belongs to that class or constructor function its return true or false
console.log(map instanceof Map);

// is present in based on key
console.log(map.has(1));

// // using forEach loop
map.forEach((value, key) => {
  console.log(`${key} ${value}`);
});