// Getting element using ID
let main = document.getElementById("main");
console.log(main);

let nav = document.getElementById("nav");
console.log(nav);

// Getting element using Class
let containers = document.getElementsByClassName("container");
console.log(containers);

// Getting element using SELECTORS
let sel = document.querySelector(".container");
console.log(sel);

// Single (first) query selector
let sel1 = document.querySelector("#nav>li");
console.log(sel1);

// All query selector
let sel2 = document.querySelectorAll("#nav>li");
console.log(sel2);
