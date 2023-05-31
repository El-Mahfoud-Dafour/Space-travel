const navToggle = document.querySelector(".nav-toggle");
const headerEl = document.querySelector(".main-header");
const navEl = document.querySelector(".nav-list");

/****** event listener*********/

navToggle.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

/********** toggl********* */
/* moon variables*/
const moonItem = document.querySelector(".moon-item");
const moonBlock = document.querySelector(".moon-block");
const moonImg = document.querySelector(".moon-img");
// mars Variables
const marsItem = document.querySelector(".mars-item");
const marsBlock = document.querySelector(".mars-block");
const marsImg = document.querySelector(".mars-img");
// europa  Variables
const europaItem = document.querySelector(".europa-item");
const europaBlock = document.querySelector(".europa-block");
const europaImg = document.querySelector(".europa-img");
// titan Variables
const titanItem = document.querySelector(".titan-item");
const titanBlock = document.querySelector(".titan-block");
const titanImg = document.querySelector(".titan-img");
// titan Variables

// add event listenrs to moon button
moonItem.addEventListener("click", () =>
  addActive([moonItem, moonBlock, moonImg])
);
moonItem.addEventListener("click", () =>
  checkForactive([
    marsItem,
    marsBlock,
    marsImg,
    europaBlock,
    europaImg,
    europaItem,
    titanBlock,
    titanImg,
    titanItem,
  ])
);

// add event listenrs to mars button
marsItem.addEventListener("click", () =>
  addActive([marsItem, marsBlock, marsImg])
);
marsItem.addEventListener("click", () =>
  checkForactive([
    moonItem,
    moonBlock,
    moonImg,
    europaBlock,
    europaImg,
    europaItem,
    titanBlock,
    titanImg,
    titanItem,
  ])
);
// add event listenrs to europa button
europaItem.addEventListener("click", () =>
  addActive([europaItem, europaBlock, europaImg])
);
europaItem.addEventListener("click", () =>
  checkForactive([
    moonItem,
    moonBlock,
    moonImg,
    marsBlock,
    marsImg,
    marsItem,
    titanBlock,
    titanImg,
    titanItem,
  ])
);
// add event listenrs to europa button
titanItem.addEventListener("click", () =>
  addActive([titanItem, titanBlock, titanImg])
);
titanItem.addEventListener("click", () =>
  checkForactive([
    moonItem,
    moonBlock,
    moonImg,
    marsBlock,
    marsImg,
    marsItem,
    europaBlock,
    europaImg,
    europaItem,
  ])
);
// functions
function addActive(elements) {
  elements.forEach((element) => {
    element.classList.add("active");
  });
}

function checkForactive(els) {
  els.forEach((el) => {
    el.classList.remove("active");
    el.classList.add("closing");
    el.addEventListener("transitionend", () => {
      el.classList.remove("closing");
    });
  });
}
