function toggle() {
  if (para.style.display != "none") {
    para.style.display = "none";
  } else {
    para.style.display = "block";
  }
}

para.addEventListener("mouseover", function run() {
  console.log("Mouse inside.");
});

para.addEventListener("mouseout", function run() {
  console.log("Mouse outside.");
});
