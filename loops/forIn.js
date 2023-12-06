// for in : loops through the properties of an object

const person = {fName : 'prashant', age :25, lastName :'mane' }
// console.log(person)
for(let key in person) {
    console.log(key)
}

// for(let key of Object.values(person)) {
//     console.log(key)
// }