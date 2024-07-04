let user = {
    name: 'ajay',
    getFullName() {
        console.log(`my name is ${this.name}`);
    }
}

// EXAMPLE -1

let anotherUser ={age:24}

for(let key in user){
    anotherUser[key] =user[key]
    console.log("EXAMPLE -1: ",anotherUser);
}

// EXAMPLE-2

// let anotherUser2 =object.assign({}, user)
let anotherUser2 =Object.assign({
    age:24
}, user)
console.log("EXAMPLE-2: ",anotherUser2);

// EXAMPLE-3  SPREAD OPERATOR

let anotherUser3 ={
    age:24,
    ...user           
}
console.log("EXAMPLE-3: ",anotherUser3);

// EXAMPLE-4   Spread operator

let marks=[26,36,49,50,73,93];

let result= Math.max(...marks);
console.log("EXAMPLE-4: ", result);
let result2= Math.min(...marks);
console.log("EXAMPLE-4: ", result2);