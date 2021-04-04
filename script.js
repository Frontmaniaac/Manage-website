const sliderItems = document.querySelectorAll(".slider__item");
const sliderBtns = document.querySelectorAll(".sliderButtons__circle")
const slider = document.querySelector(".slider");
sliderBtns.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        sliderBtns.forEach((item,index)=>{
            sliderBtns[index].classList.remove("activeCircle")
        })
        slider.style.transform='translateX('+(-sliderItems[index].clientWidth * index) + 'px)';
        sliderBtns[index].classList.add("activeCircle")
    })
})
const menuBars=document.querySelectorAll(".menuBtn__bar")
const menuBtn = document.querySelector(".menuBtn")
const navbar=document.querySelector(".nav")
menuBtn.addEventListener("click",()=>{
    navbar.classList.toggle("nav--active")
    menuBars.forEach((item)=>{
        item.classList.toggle("menuBtn__bar--active")
    })
})
const inputEmail = document.querySelector(".footer__form--input")
const mailformat = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2-8})?$/;
const sendBtn = document.querySelector(".footer__form--btn")
inputEmail.addEventListener("keyup", () => {

    if (mailformat.test(inputEmail.value)) {
        inputEmail.classList.add("valid")
        inputEmail.classList.remove("invalid")
    } else {
        inputEmail.classList.add("invalid")
        inputEmail.classList.remove("valid")
    }
})
sendBtn.addEventListener("click", () => {
    inputs.forEach(input => {
        if (input.value.length <= 0) {
            input.classList.add("invalid");
        } else {
            input.classList.add("valid");
        }
    })
})
