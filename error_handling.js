let student = {
    firstName: "Ajay",     // Data properties
    lastName: "Prakash",   // Data properties
    get fullName() {       // Asscessor properties
        return `${student.firstName} ${student.lastName}`;
    },
    set fullName(val) {    // Asscessor properties
        
        // if (typeof val != "string") return   // If given line 15 is not a string (student.fullname)
        
        if (typeof val != "string") {
            let err = Error("It is not a string");
            throw err;
        }
        let value = val.split(" ");
        this.firstName = value[0];
        this.lastName = value[1] ?? "";   // ?? nullish operator(it is optional)
    },
};

try{
    // Defensive programming
student.fullName = 23;
}catch (exception){
    alert(exception);
}

console.log(student.fullName);