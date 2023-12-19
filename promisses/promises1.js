const promises = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve({
      userName: "prashant",
      password: "1233",
      email: "prashant@gmail.com",
    });
  }, 1000);
});

promises.then((result) => {
  //  console.log(result);
});

// chain promises
const promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const status = true;
    if (status) {
      resolve({
        userName: "prashant",
        password: "password",
        email: "prashant@gmail.com",
      });
    } else {
      reject("ERROR : Something Wents Wrong");
    }
  }, 1000);
});
promise1
  .then(function (user) {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(function () {
    console.log("promise is either resolve or rejected");
  });

////////////////
const promise2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    const status = false;
    if (status) {
      resolve({
        course: "java",
        Duration: "4",
      });
    } else {
      reject("ERROR : Something Wents Wrong");
    }
  }, 1000);
});

async function consumePromise() {
  try {
    const response = await promise2;
  console.log(response);
    
  } catch (error) {
    console.log(error)
  }
}
consumePromise();
    