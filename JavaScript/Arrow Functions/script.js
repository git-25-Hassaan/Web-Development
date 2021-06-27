console.log("Activated");
console.log("\n");

// Normal function
function greet() {
  console.log("Normal Function!!");
}
greet();

// Arraow Function
greetings = () => {
  console.log("Arrow Function!!");
};
greetings();

// Short Arrow Function
add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

// Short+ Arrow Function
prod = (a, b) => a * b;
console.log(prod(3, 2));

// Short++ Arrow Function
let half = (a) => a / 2;
console.log(half(50));

// Arrow Function in Objects (!! Good !!)
let obj1 = {
  names: ["Hassaan", "Dayyan", "Soban", "Fassih"],
  message: "Good Morning ",
  speak() {
    this.names.forEach((student) => {
      console.log(this.message + student);
    });
  },
};
obj1.speak();
console.log("\n");

// Function in Objects (!! Not Good !!)
let obj2 = {
  names: ["Hassaan", "Dayyan", "Soban", "Fassih"],
  message: "Good Morning ",
  speak() {
    this.names.forEach(function s(student) {
      //   message = "Good Morning ";
      console.log(this.message + student);
    });
  },
};
obj2.speak();
