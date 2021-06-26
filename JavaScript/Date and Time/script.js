// Simple Date
let date = new Date();
console.log(date);
console.log("\n");

let newDate = new Date(0);
console.log(newDate);
console.log("\n");

let givenDate = new Date("2019-09-25");
console.log(givenDate);
console.log("\n");

// let reqDate = new Date(year, month, day, hour, minute, second, millisecond);
let reqDate = new Date(3020, 25, 06, 9, 3, 2, 34);
console.log(reqDate);
console.log("\n");

// Date functions
let yr = date.getFullYear();
console.log("Year: ", yr);

let dt = date.getDate();
console.log("Date: ", dt);

let month = date.getMonth();
console.log("Month: ", month);

let hour = date.getHours();
console.log("Hours: ", hour);

date.setDate(20);
console.log(date);

let milliSec = Date.now();
// let milliSec = Date.now();
console.log(milliSec);
