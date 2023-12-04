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

