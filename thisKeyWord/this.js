const person = {
    firstName : "prashant",
    lastName : "Mane",
    age : 25,
    fullName : function(){
        return this.firstName +" "+this.lastName;
    }
}

// console.log(person.fullName());

const person1 = {
    fullName (){
        return this.firstName +" "+this.lastName + " " + this.age;
    }

}

const person2 = {
    firstName : "John",
    lastName : "sena",
    age : 25,
}
let x = person1.fullName.call(person2);
console.log(x);