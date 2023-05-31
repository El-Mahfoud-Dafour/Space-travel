const navToggle = document.querySelector(".nav-toggle");
const headerEl = document.querySelector(".main-header");
const navEl = document.querySelector(".nav-list");

/****** event listener*********/

navToggle.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});
// switching between crew members

const switchButtons = document.querySelectorAll(".crew-switch");
const crewDetailEl = document.querySelectorAll(".crew-details");
const crewImgs = document.querySelectorAll(".crew-img");

switchButtons[0].classList.add("active");
crewDetailEl[0].classList.add("active");
crewImgs[0].classList.add("active");

/******* */

/**** switching between crew details and images ****/
switchButtons.forEach((el, index) => {
  el.addEventListener("click", () => {
    switchButtons.forEach((e) => {
      e.classList.remove("active");
      crewImgs.forEach((elements) => {
        elements.classList.remove("active");
      });
      crewDetailEl.forEach((elements) => {
        elements.classList.remove("active");
      });
    });
    el.classList.add("active");
    crewDetailEl[index].classList.add("active");
    crewImgs[index].classList.add("active");
    console.log(crewImgs[index]);
  });
});
