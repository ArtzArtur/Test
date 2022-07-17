const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const imgs  = document.querySelectorAll("img")

function nextPhoto(){
let mainSlide = document.querySelector('.main-slide')
console.log(mainSlide.nextElementSibling)
}

btnNext.addEventListener('click',nextPhoto)