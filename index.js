const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const imgs  = document.querySelectorAll("img")
const slider = document.querySelector('slider')
imgs.forEach((a,idx)=>{
  console.log(a,idx)
  a.style.transform=`translateX(${idx*100}%)`
})

function nextPhoto(){
  console.log('test')
}
btnNext.addEventListener('click',nextPhoto)