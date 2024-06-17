
// camelcase: myFirstName
// pascal :   MyFirstName

function Person(name) {
    this.name = name;
    this.greeting = function () {
        console.log(`my name is ${this.name}`);
    }
}

let person = new Person("ajay");
person.greeting();