console.log("Activated");

// Printing Math Objects.
let m = Math;
console.log(m);

// Printing contants from Math objects.
console.log("The value of Math.E is ", Math.E);
console.log("The value of Math.PI is ", Math.PI);
console.log("The value of Math.LN2 is ", Math.LN2);

// Printing Functions from Math objects.
let a = 21.5456;
let b = 34.3214;

console.log("The value of a and b is ", a, b);
console.log("The rounded value of a and b is ", Math.round(a), Math.round(b));
console.log("3 raised toe the power 2 is ", Math.pow(3, 2));
console.log("Square root of 36 is ", Math.sqrt(36));

// Ceil and Floor Functions
console.log("5.6754 rounded up to nearest integer is ", Math.ceil(5.6754));
console.log("5.6754 rounded down to nearest integer is ", Math.floor(5.6754));

// Absolute Functions
console.log("Absolute value of 5.66 is ", Math.abs(5.66));
console.log("Absolute value of -5.66 is ", Math.abs(-5.66));

// Trigonometric Functions
console.log("The value of sin(PI/2) is ", Math.sin(Math.PI / 2));
console.log("The value of cos(PI) is ", Math.cos(Math.PI));

// Min and Max functions
console.log("Min value of 4 5 6 is ", Math.min(4, 5, 6));
console.log("Max value of 4 5 6 is ", Math.max(4, 5, 6));

// Generating a random number (0 - 1)
let r = Math.random();
console.log("The random number is ", r);

// Generating a random number (1 - 100)
let f = 1;
let s = 100;
let random = f + (s - f) * Math.random();
console.log("The random number is ", Math.round(random));
