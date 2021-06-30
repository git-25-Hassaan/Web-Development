let j = 0;
let i = 0;
let score = 0;
let check = false;
let store = new Array();

function display() {
  // Counting intervals
  i++;
  // Displaying Random Numbers
  let f = 1;
  let s = 100;
  let random = f + (s - f) * Math.random();
  let f1 = 1;
  let s1 = 100;
  let random1 = f1 + (s1 - f1) * Math.random();
  n1 = document.getElementById("first").innerHTML = Math.round(random);
  n2 = document.getElementById("second").innerHTML = Math.round(random1);

  // Displaying Random Operators
  let operators = ["+", "-"];
  let f2 = 0;
  let s2 = 1;
  let random2 = f2 + (s2 - f2) * Math.random();
  let index = Math.round(random2);
  op = document.getElementById("operator").innerHTML = operators[index];

  store.push(n1, n2);
  console.log("array", store);

  let ans = document.getElementById("answer").value;
  console.log(ans);
  // Checking operators result
  let result;
  if (op == "+") {
    result = store[j - 2] + store[j - 1];
    if (ans == result) {
      score += 5;
      document.getElementById("score").innerHTML = score;
    } else {
      score += 0;
      document.getElementById("score").innerHTML = score;
    }
  } else {
    result = store[j - 2] - store[j - 1];
    if (ans == result) {
      score += 5;
      document.getElementById("score").innerHTML = score;
    } else {
      score += 0;
      document.getElementById("score").innerHTML = score;
    }
  }
  j += 2;
  console.log("Result", result);
  console.log("score ", score);

  // Stop after these intervals.
  if (i > 2) {
    clearInterval(val);
    check = false;
    store = [];
    console.log("array ", store);
  }
  document.getElementById("answer").value = "";
}
function start() {
  if (check == true) {
    console.log("Already started.");
  } else {
    i = 0;
    score = 0;
    document.getElementById("answer").value = "";
    val = setInterval(display, 10000);
    check = true;
  }
}
