const clickBtn = document.getElementById("submitBtn");
const heading$ = document.querySelector(".heading");
let isVisible = true;

clickBtn.addEventListener("click", function () {
  if (isVisible) {
    heading$.style.display = "none";
    clickBtn.innerHTML = "Show Here!";
    clickBtn.style.backgroundColor = "#3ea6ff";
    clickBtn.style.borderRadius = "10px";
    clickBtn.style.padding = "6px";
    isVisible = false;
  } 
  else {
    heading$.style.display = "block";
    clickBtn.innerHTML = "Click Me!";
    clickBtn.style.backgroundColor = "#3ea6ff";
    clickBtn.style.borderRadius = "10px";
    clickBtn.style.padding = "6px";
    isVisible = true;
  }
});
