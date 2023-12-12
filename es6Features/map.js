// map holds key ans value pairs

let map = new Map([
  ["apple", 200],
  ["orange", 500],
  ["kiwi", 500],
]);

// console.log(map.delete("apple"));

// list of all entries
let text = "";

for (const maps of map.entries()) {
  text += maps + " \n";
}
console.log("entries",text);

// // list of all keys
for (const maps of map.keys()) {
  text += maps + " \n";
}
console.log("keys : ",text);

// list of all values
for (const maps of map.values()) {
  text += maps + " \n";
}
console.log("values : ",text);
