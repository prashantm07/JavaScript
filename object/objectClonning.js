// cloning the object 

const person = {
    fName : 'Ravi',
    lastName : 'kumar',
    id : 20,
    fullName : function(){
        return this.fName+' '+this.lastName;
    }
};

// 1 way to clone
const another1 = {};

for(let key of Object.keys(person)){
    another[key] = person[key];

}
console.log(another1);

// 2 way to clone object
const another2 = Object.assign({}, (person, person2));
console.log(another2)

// 3 way to clone object
 const another3 = {...person}; // usind spred oprerator
 console.log(another3);