function createPerson(name) {
    return {
        name,

        greetings() {
            let msg = `my name is ${this.name}`;
            console.log(msg)
        }
    }
}
let anbu = createPerson("ajay");
anbu.greetings()
let gokul = createPerson("gokul")
gokul.greetings()