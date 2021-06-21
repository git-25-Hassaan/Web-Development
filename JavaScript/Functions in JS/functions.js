console.log("JS activated");

console.log("\n");
// Common Function.
function greet(name, text = "Default value: ") {
  console.log(text + name);
}
let text = "Good morning ";
let name1 = "Hassaan";
let name2 = "Hamza";
let name3 = "Junaid";
let name4 = "Zaid";

greet(name1, text);
greet(name2, text);
greet(name3, text);
greet(name4);

console.log("\n");
// Sum of array Function.
function sums(ar, size) {
  let add = 0;
  for (var i = 0; i < size; i++) {
    add = add + ar[i];
  }
  return add;
}
let arr = [1, 2, 3, 4, 5];
let ans = sums(arr, arr.length);
console.log("Sum of array is " + ans);

console.log("\n");
// Great | Less Function
function greatless(val1, val2) {
  if (val1 > val2) console.log(val1 + " is greater than " + val2);
  else if (val1 == val2) console.log(val1 + " is equal to " + val2);
  else console.log(val1 + " is less than " + val2);
}
let value1 = 12;
let value2 = 32;
let ans1 = greatless(value1, value2);

console.log("\n");
// MinMax Array Function
function minmax(ar1) {
  ar1 = ar1.sort();
  console.log("Minimum value of array is " + ar1[0]);
  console.log("Minimum value of array is " + ar1[ar1.length - 1]);
}
let arr1 = [12, 23, 34, 45.1, 10, 56.3, 67, 76, 65, 54, 43, 32, 21];
let ans2 = minmax(arr1);
