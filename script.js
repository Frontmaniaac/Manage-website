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

