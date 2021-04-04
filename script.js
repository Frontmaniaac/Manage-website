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

