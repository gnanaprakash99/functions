//OBJECT-ORIENTED PROGRAMMING (OOP)



// let name="ajay";
// let age =24;
// let interest = ["workout,to make better fitness journey"]
// let address={
//     city:"coimbatore",
//     state:"tamilnadu"
// }

// function greetings(){
//     // let message="my name is "+ name +" i love " + interest;
//     let message='my name is ${name},i love ${interest}'
//     console.log(message);
// }greetings()


let person = {
    name: "ajay",
    age: 24,
    sex: "male",
    interest: ["workout,to make better fitness journey"],
    isAlive: true,
    address: {               //this is nested loop because object inside an object
        city: "coimbatore",
        state: "tamilnadu",
    },


    greetings: function () {
        // let message = "my name is " + name + " i love " + interest;
        let message = `my name is ${person.name},i love ${this.interest}`
        // we can use person(variable) or 'this' to call that name within the object
        console.log(message);
    }
};
person.greetings()

//EXAMPLE-2

const user = {
    name: 'ajay',
    getFullName() {
        console.log(`my name is ${this.name}`);
    }
}
for (let key in user) {
    // console.log(key, user.key);
    console.log(key, user[key]);
}
for (let currentName of Object.keys(user)) {
    console.log(currentName);
}
for (let entry of Object.entries(user)) {
    console.log(entry);
}

// EXAMPLE-3

const users = {
    name: 'ajay',
    getFullName() {
        console.log(`my name is ${this.name}`);
    }
}

if ("name" in users) {
    console.log("yes");
}
if ("age" in users) {
    console.log("yes");
} else {
    console.log("no");
}