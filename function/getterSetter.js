const person = {
  fName: "prashant",
  lastName: "mane",
  set fullName(value) {
    if (typeof value !== "string") {
      throw new Error("value must be a string");
    }
    const parts = value.split(" ");
    this.fName = parts[0];
    this.lastName = parts[1];
  },
};
try {
  person.fullName = true;
} catch (error) {
  console.log(error);
}
console.log(person);
