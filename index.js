const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const imgs  = document.querySelectorAll(".slide")
let currImg = 0;
const limit = imgs.length-1

// slider gallery

imgs.forEach((a,idx)=>{
  a.style.transform=`translateX(${idx*100}%)`
})


let slideShow = setInterval(nextPhoto,2500);


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
  clearInterval(slideShow)
  slideShow = setInterval(nextPhoto,2500);
}

function prevPhoto(){
  if(currImg===0){
    currImg=limit
  }
  else{
  currImg--
  }
  imgs.forEach((a,idx)=>{
    a.style.transform=`translateX(${(idx-currImg)*100}%)`
  })
  clearInterval(slideShow)
  slideShow = setInterval(nextPhoto,2500);
}

btnNext.addEventListener('click',nextPhoto)
btnPrev.addEventListener('click',prevPhoto)

// gallery

const photos = document.querySelectorAll('.photo')
const mainPhoto = document.querySelector('.main-photo')

photos.forEach(photo=>{
  photo.addEventListener('click',(e)=>{
    photos.forEach(photo=>{
      photo.classList.remove("focus")
    })
    mainPhoto.src = e.target.src
    if(mainPhoto.src==e.target.src){
      e.target.classList.add("focus")
    }
  })
})
