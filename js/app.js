const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".nav-container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
