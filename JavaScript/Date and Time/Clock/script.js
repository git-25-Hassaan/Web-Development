console.log(" JavaScript Activated");

function displayTime() {
  date = new Date();
  hours = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();
  hour.innerHTML = hours;
  minute.innerHTML = min;
  seconds.innerHTML = sec;
}
setInterval(displayTime, 1000);
