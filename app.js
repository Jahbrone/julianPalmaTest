const hamburger = document.querySelector(".hamburger");
const menuRight = document.querySelector(".menu-right");
const menuLeft = document.querySelector(".menu-left");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuRight.classList.toggle("active");
  menuLeft.classList.toggle("active");
});

document.querySelectorAll(".menuRight").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
document.querySelectorAll(".menuLeft").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
