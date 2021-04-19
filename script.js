// SLIDER
const sliderItems = document.querySelectorAll(".slider__item");
const sliderBtns = document.querySelectorAll(".sliderButtons__circle");
const slider = document.querySelector(".slider");
if (document.body.clientWidth > 600) {
  sliderBtns.forEach((item, index) => {
    item.addEventListener("click", () => {
      sliderBtns.forEach((item, index) => {
        sliderBtns[index].classList.remove("activeCircle");
      });
      if (
        document.body.clientWidth > 480 &&
        sliderBtns.length == 4 &&
        index == 3
      ) {
        slider.style.transform =
          "translateX(" +
          (-sliderItems[index].clientWidth + 40) * index +
          "px)";
      } else {
        slider.style.transform =
          "translateX(" + -sliderItems[index].clientWidth * index + "px)";
      }

      sliderBtns[index].classList.add("activeCircle");
    });
  });
}
// let index = 1;
// if (document.body.clientWidth < 600)
//   setInterval(() => {
//     sliderBtns.forEach((item, index) => {
//       sliderBtns[index].classList.remove("activeCircle");
//     });
//     slider.style.transform =
//       "translateX(" + -sliderItems[1].clientWidth * index + "px)";
//     sliderBtns[index].classList.add("activeCircle");
//     index == sliderItems.length - 1 ? (index = 0) : index++;
//   }, 5000);
//MENU
const menuBars = document.querySelectorAll(".menuBtn__bar");
const menuBtn = document.querySelector(".menuBtn");
const navbar = document.querySelector(".nav");
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("nav--active");
  menuBars.forEach((item) => {
    item.classList.toggle("menuBtn__bar--active");
  });
});
const inputEmail = document.querySelector(".footer__form--input");
const mailformat = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2-8})?$/;
const sendBtn = document.querySelector(".footer__form--btn");
inputEmail.addEventListener("keyup", () => {
  if (mailformat.test(inputEmail.value)) {
    inputEmail.classList.add("valid");
    inputEmail.classList.remove("invalid");
  } else {
    inputEmail.classList.add("invalid");
    inputEmail.classList.remove("valid");
  }
});
sendBtn.addEventListener("click", () => {
  inputs.forEach((input) => {
    if (input.value.length <= 0) {
      input.classList.add("invalid");
    } else {
      input.classList.add("valid");
    }
  });
});

// CHECK IF ELEMENT IS INSIDE VIEWPORT
var bounding = [];
const sliderWrap = document.querySelector(".sliderWrap");
sliderWrap.addEventListener("scroll", () => {
  sliderItems.forEach((item, i) => {
    bounding[i] = item.getBoundingClientRect();

    if (
      bounding[i].left >= -100 &&
      bounding[i].right <= window.innerWidth + 100
    ) {
      sliderBtns[i].classList.add("activeCircle");
    } else {
      sliderBtns[i].classList.remove("activeCircle");
    }
  });
});
