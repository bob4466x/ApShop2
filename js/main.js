const images = document.querySelectorAll(".image-wrapper >img");
let count = 0;

const txt = document.querySelector(".text");
txt.classList.toggle(".active");

function nextSlide() {
  images[count].style.animation = "nextOut 1s forwards";
  if (count >= images.length - 1) {
    count = 0;
  } else {
    count++;
  }
  images[count].style.animation = "nextIn 1s forwards";
}

function autoSlide() {
  deletInterval = setInterval(function () {
    nextSlide();
  }, 2000);
}
autoSlide();

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
