const person = {
    name: "ajay"
}

person.age = 24;
person.greeting = function () { }

delete person.greeting;
delete person.age;
console.log(person);