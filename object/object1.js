const person = {
    fName : 'Ravi',
    lastName : 'kumar',
    id : 20,
    fullName : function(){
        return this.fName+' '+this.lastName;
    }
};

const person2 = {
    fName : 'prashant',
    lastName : 'kumar',
    id : 20,
    fullName : function(){
        return this.fName+' '+this.lastName;
    }
};

// console.log(person.fullName());

// for( let key in person){
//     console.log(key);
// }

for(let value of Object.entries(person)){
    // console.log(value);
}

// cloning the object 

// 1 way to clone

// const another = {};

// for(let key of Object.keys(person)){
//     another[key] = person[key];

// }
// console.log(another);

// 2 way to clone object
const another = Object.assign({}, (person, person2));
// console.log(another)

// 3 way to clone object
 const another1 = {...person};
 console.log(another1);