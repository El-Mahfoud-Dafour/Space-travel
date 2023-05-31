const navToggle = document.querySelector(".nav-toggle");
const headerEl = document.querySelector(".main-header");
const navEl = document.querySelector(".nav-list");

/****** event listener*********/

navToggle.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});
