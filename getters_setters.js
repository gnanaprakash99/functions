// getters => Used to get data
// setters => Used to set data


let student = {
    firstName: "Ajay",     // Data properties
    lastName: "Prakash",   // Data properties
    get fullName() {       // Asscessor properties
        return `${student.firstName} ${student.lastName}`;
    },
    set fullName(val) {    // Asscessor properties
        let value = val.split(" ");
        this.firstName = value[0];
        this.lastName = value[1] ?? "";       // ?? nullish operator(it is optional)
    },
};

student.fullName = "Mohan kumar";

console.log(student.fullName);