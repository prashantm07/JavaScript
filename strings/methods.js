let str = "apple, banana , kiwi";
let s = str.slice(0, 6); // extracting the part of the string
console.log(s);

let str1 = "   welcome to hyderabad to hyderabad      ";
console.log("origina String : ",str1);
let newSrt = str1.replace(/Hyderabad/gi, "mumbai") // replace text
console.log("trim :",newSrt.trim());// remove spaces before and after
console.log("start Trim :",newSrt.trimStart()); // remove space starting only
console.log("End Trim : ",newSrt.trimEnd()); // remove space ending only
const sp = newSrt.trim().split(" "); // split string basic of spaces
console.log("split :" ,sp);

const text1 = 'hello';
const text2 = 'world';
const text3 = '     JavaScript    ';

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1); // "hello world"

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); // HELLO

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); // JavaScript

// converting the string to an array
const result4 = text1.split();
console.log(result4); // ["hello"]

// slicing the string
const result5= text1.slice(1, 3);
console.log(result5); // "el"
