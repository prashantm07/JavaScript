const a = ["Hydrogen", "Helium", "Lithium", "Beryllium" , "prashant"];

function findLen(){
    return a.length;
}
console.log(findLen());

const a2 = a.map((s)=>{
return s.length;
})
console.log("Using arrow function",a2)

const a3 = a.map(function(s){
    return s.length;
    })
    console.log("normal way",a3)
    
