let str = "apple, banana , kiwi";
let s = str.slice(0, 6);
console.log(s);

let str1 = "   welcome to hyderabad to hyderabad      ";
console.log("origina String : ",str1);
let newSrt = str1.replace(/Hyderabad/gi, "mumbai") // replace text
console.log("trim :",newSrt.trim());// remove spaces before and after
console.log("start Trim :",newSrt.trimStart()); // remove space starting only
console.log("End Trim : ",newSrt.trimEnd()); // remove space ending only
const sp = newSrt.trim().split(" "); // split string basic of spaces
console.log("split :" ,sp);
