function createPerson(name) {
    return {
        name,

        greetings() {
            let msg = `my name is ${this.name}`;
            console.log(msg)
        }
    };
}
let anbu = createPerson("ajay");
anbu.greetings();
let gokul = createPerson("gokul");
gokul.greetings();


// function createPerson(name) {
//     return {
//         name,

//         greetings() {
//             console.log(`my name is ${this.name}`)
//         }
//     };
// }
// let ajay = createPerson("ajay");
// ajay.greetings();
// let gokul = createPerson("gokul");
// gokul.greetings();
