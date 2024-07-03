// Solution 1
let date = Date();
let now = new Date()

// console.log(date);
// console.log(now.getDay());
// console.log(now.getFullYear());
// console.log(now.getSeconds());

// Solution 2
function currentDayAndTime(){
let date1 = new Date();
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = daysOfWeek[date1.getDay()]
let hours = date1.getHours()
let amPm = hours < 12 ? "AM" : "PM";   //ternary operator

 // Convert hours to 12-hour format
 hours = hours % 12;
 hours = hours ? hours : 12; // the hour '0' should be '12'

console.log(`Today is: ${day}`);
console.log(`Current time is: ${date1.getHours()} ${amPm}:${date1.getMinutes()}:${date1.getSeconds()}`);
}
// currentDayAndTime()

function currentDate(){
    let today=new Date();
    let date2= today.getDay();
    let month=today.getMonth();
    let year=today.getFullYear();
    console.log(`CurrentDate:${date2}-${month}-${year}`);
}
currentDate()