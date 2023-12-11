// Json is a format for storing and trasporting data
// data interchange formats
// data in key/value pairs
// 

// const obj = {name: "John", age: 30, city: "New York"};
// console.log(obj);
// const myobj = JSON.stringify(obj);
// console.log(myobj);

// Creating a JavaScript object
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };

  console.log(typeof person)

//  Converting JavaScript object to JSON string
  const jsonString = JSON.stringify(person);
  console.log(jsonString);

//   Parsing JSON string back to JavaScript object
  const parsePerson = JSON.parse(jsonString);
  console.log(parsePerson.name);

  const user = {};

  user['name'] = "Ravi";
  user['first name'] = "Ravi Kumar";

  user.name;
  user['first name']
