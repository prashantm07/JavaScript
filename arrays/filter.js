let people = [

    {name: 'Rachel', age: 24},

    {name: 'David', age: 16},

    {name: 'Aakash', age: 23},

    {name: 'Franklin', age: 26},

    {name: 'Ricky', age: 17}

];

let adults = people.filter(ages => ages.age >= 18);

console.log(adults);