const btnclose = document.querySelector(".close");
const btnopen = document.querySelector(".open");

const nav = document.querySelector(".nav-two");

btnclose.addEventListener("click", function () {
  if (btnclose) {
    nav.style.display = "none";
  }
});
btnopen.addEventListener("click", function () {
  if (btnopen) {
    nav.style.display = "block";
  }
});