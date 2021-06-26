console.log(" JavaScript Activated");

let sec = 0;
let min = 0;
let hr = 0;
let check = false;

function displaySec() {
  sec = sec + 1;
  document.getElementById("sec-zero-2").innerHTML = sec;
  if (sec == 10) {
    document.getElementById("sec-zero-1").innerHTML = "";
  } else if (sec == 60) {
    min = min + 1;
    document.getElementById("min-zero-2").innerHTML = min;
    if (min == 10) {
      document.getElementById("min-zero-1").innerHTML = "";
    } else if (min == 60) {
      hr = hr + 1;
      document.getElementById("hr-zero-2").innerHTML = hr;
      if (hr == 10) {
        document.getElementById("hr-zero-1").innerHTML = "";
      } else if (hr == 60) {
        alert("Maximum time reached.");
      }
    } else if (min == 61) {
      document.getElementById("min-zero-1").innerHTML = "0";
      document.getElementById("min-zero-2").innerHTML = "0";
      min = 0;
    }
  } else if (sec == 61) {
    document.getElementById("sec-zero-1").innerHTML = "0";
    document.getElementById("sec-zero-2").innerHTML = "0";
    sec = 0;
  }
}
function start_me() {
  if (check == true) {
    console.log("Already started.");
  } else {
    starting = setInterval(displaySec, 1000);
    check = true;
  }
}
function stop_me() {
  clearInterval(starting);
  check = false;
}
function reset_me() {
  sec = 0;
  min = 0;
  hr = 0;
  check = false;
  clearInterval(starting);
  document.getElementById("sec-zero-1").innerHTML = "0";
  document.getElementById("sec-zero-2").innerHTML = "0";
  document.getElementById("min-zero-1").innerHTML = "0";
  document.getElementById("min-zero-2").innerHTML = "0";
  document.getElementById("hr-zero-1").innerHTML = "0";
  document.getElementById("hr-zero-2").innerHTML = "0";
}
