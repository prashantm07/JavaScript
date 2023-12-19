async function getAllUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}
// getAllUsers()
https://github.com/prashantm07/api-s/blob/main/user.json

fetch("https://raw.githubusercontent.com/prashantm07/api-s/main/user.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("E : ", error);
  });
