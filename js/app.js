const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav ul li a");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("visible");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("visible");
  });
});
