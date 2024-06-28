// Type 1
function sumExpense(...arguments) {     // Using three dots in a function called rest operator,using three dots in a array spread operator
    console.log(arguments);             // not compulsary using the word arguments, any word but meaningful
}
var call = sumExpense(100, 200, 300, 400)

// Type 2
function sumExpense1(...expense) {
    return expense.reduce((a, b) => a + b);
}
let result = sumExpense1(100, 200, 300, 400)
// console.log("total expense is:", result);
console.log(`total expense is:${result}`);

// Type 3
function sumExpense2(loan, ...expense) {
    let total = expense.reduce((a, b) => a + b);
    return total - loan;
}
let result2 = sumExpense2(50, 100, 200, 300, 400)
console.log(`total expense is:${result2}`);