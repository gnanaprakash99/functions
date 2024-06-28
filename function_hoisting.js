// Function Declaration

function Declaration() {
    console.log("Using function from declaration. we can call this function before or after function declared");
}
Declaration()


// Function Expression

let content = function () {
    console.log("Using function from expression. we can call only after the function declared");
}
content();






// Adding two numbers
let no1 = 432;          // Global value
let no2 = 947;          // Global value

// Immediately Invoked Function Expression (IIFE)
//TYPE 1
(function sumNumbers(num1, num2) {
    let result = num1 + num2;    // local value
    console.log(result);
})(no1, no2);

//TYPE 2
((num1, num2) =>{
    let result = num1 + num2;    // local value
    console.log(result);
})(no1, no2);