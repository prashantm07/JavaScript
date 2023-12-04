// Using for Loop
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i])
}

// Using while Loop
let index = 0;
while (arr.length > index) {
  // console.log(arr[index]);
  index++;
}

// Using forEach() Method
arr.forEach(MyFunction);

function MyFunction(item) {
//   console.log(item);
}

// forEach
arr.forEach((num)=>{
  // console.log(num);
})

// Using loop initalization 
const fillArray = new Array();
const length = 5;
for (let i = 0; i < arr.length; i++) {
    fillArray.push(i+1);
   }
console.log(fillArray)

// using map
// syntax : const filledArray = Array.from({ length }).map(() => value);

