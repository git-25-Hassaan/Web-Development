let i = 0;
let score = 0;
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
  console.log(i);

  // Checking operators result
  let result;
  if (op == "+") {
    result = n1 + n2;
  } else if (op == "-") {
    result = n1 - n2;
  }

  // Controlling Score
  check();

  // Stop after these intervals.
  if (i == 3) {
    clearInterval(val);
    score = 0;
  }
  document.getElementById("answer").innerHTML = "";
}
function start() {
  document.getElementById("answer").innerHTML = "";
  val = setInterval(display, 5000);
  i = 0;
  score = 0;
}
function check() {
  let ans = document.getElementById("answer");
  console.log(ans);
  if (ans === result) {
    score += 5;
    document.getElementById("score").innerHTML = score;
  } else {
    score += 0;
    document.getElementById("score").innerHTML = score;
  }
}
