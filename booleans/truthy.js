// Non-empty Strings:
if ("hello") {
  // this block will be excute
}

// Number (except 0)
if (45) {
  // this block will be excute
}

// Object
if ({ key: "hello" }) {
  // this block will be excute
}

// arrays
if ([1, 2, 3, 4, 5, 6, 7, 8]) {
  // this block will be excute
}

// function
if (
  () => {
    return true;
  }
) {
  // this block will be excute
}

// Truthy Expressions:
if (true || "hello") {
  // this block will be excute
}
