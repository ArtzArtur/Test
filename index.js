const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const imgs  = document.querySelectorAll("img")
let currImg = 0;
const limit = imgs.length-1

imgs.forEach((a,idx)=>{
  a.style.transform=`translateX(${idx*100}%)`
})


function nextPhoto(){
  
  if(currImg===limit){
  currImg = 0
  }
  else{
  currImg++
  }
  imgs.forEach((a,idx)=>{
    a.style.transform=`translateX(${(idx-currImg)*100}%)`
  })
}

function prevPhoto(){
  console.log(limit)
  console.log(currImg)
  if(currImg===0){
    currImg=limit
  }
  else{
  currImg--
  }
  imgs.forEach((a,idx)=>{
    a.style.transform=`translateX(${(idx-currImg)*100}%)`
  })
}

btnNext.addEventListener('click',nextPhoto)
btnPrev.addEventListener('click',prevPhoto)
