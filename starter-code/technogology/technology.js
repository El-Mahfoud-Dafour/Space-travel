const navToggle = document.querySelector(".nav-toggle");
const headerEl = document.querySelector(".main-header");
const navEl = document.querySelector(".nav-list");

/****** event listener*********/

navToggle.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// variables of technology page
const switchEls = document.querySelectorAll(".switch-technology");
const terminologyDetails = document.querySelectorAll(".terminology-details");
const technologyImg = document.querySelectorAll(".technology-img");

//eventListners for technology switch

switchEls.forEach((el, index) => {
  el.addEventListener("click", () => {
    //remove all active classes from other elements
    switchEls.forEach((el) => {
      el.classList.remove("active");
    });
    terminologyDetails.forEach((el) => {
      el.classList.remove("active");
    });
    technologyImg.forEach((el) => {
      el.classList.remove("active");
    });
    //adding active classlist to the elements with the same index of the clicked button
    switchEls[index].classList.add("active");
    terminologyDetails[index].classList.add("active");
    technologyImg[index].classList.add("active");
    el.classList.add("active");
  });
});

// add the active class to the first elements when the page loads
switchEls[0].classList.add("active");
terminologyDetails[0].classList.add("active");
technologyImg[0].classList.add("active");
