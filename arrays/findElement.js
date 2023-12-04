const arr = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50];

function check(element) {
  const filterArr = arr.filter((a) => a == element);
  if (filterArr.length) {
    return element + " is present";
  } else {
    return element + " not present";
  }
}
// console.log(check(555));

// using indexOf()
let element = 40;
if (arr.indexOf(element) > 0) {
//   console.log("Present");
} else {
//   console.log("Not Present");
}

// using loop
function checkElement(element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      return `${element} is present in the array.`;
    }
  }
  return `${element} is Not present in the array.`;
}
console.log(checkElement(4333));


