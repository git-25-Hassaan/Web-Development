console.log("My first Java Script Code.");

// JS is a loosly type language

var x=5;
var y=6;

console.log(x+" * "+y+" = "+x*y);

// Functions in JS

function sum(a,b)
{
    return a+b;
}

console.log(sum(x,y));

// You can assign function to variables

var mysum=sum;
console.log(mysum)