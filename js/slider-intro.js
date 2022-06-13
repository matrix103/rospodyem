const prevIntro = document.querySelector('.slider-intro__prev');
const nextIntro = document.querySelector('.slider-intro__next');
const slidesIntro = document.querySelectorAll('.slider-intro__item');
const slidesWrapperIntro = document.querySelector('.slider-intro__wrapper');
const dotsIntro = document.querySelectorAll('.slider-intro-dots__item');

let indexIntro = 0;
let leftIntro = 0;

const activeDotIntro = () => {
   for (let dotIntro of dotsIntro){
      dotIntro.classList.remove('active__dot');
   }
   dotsIntro[indexIntro].classList.add('active__dot');
   slidesWrapperIntro.style.left = `${leftIntro}px`;
}

const prevSlideIntro = () => {
   if(indexIntro == 0 ){
      indexIntro = slidesIntro.length -1;
      leftIntro = (-975*(slidesIntro.length-1));
      slidesWrapperIntro.style.left = `${leftIntro}px`;
      activeDotIntro();
   }
   else{
      indexIntro--;
      leftIntro += 975;
      slidesWrapperIntro.style.left = `${leftIntro}px`;
      activeDotIntro();
   }
}

const nextSlideIntro = () => {
   if(indexIntro == slidesIntro.length -1 ){
      indexIntro = 0;
      leftIntro = 0;
      slidesWrapperIntro.style.left = `${leftIntro}px`;
      activeDotIntro();
   }
   else{
      indexIntro++;
      leftIntro -= 975;
      slidesWrapperIntro.style.left = `${leftIntro}px`;
      activeDotIntro();
   }
}

dotsIntro.forEach((itemIntro, indexDotIntro)=>{
   itemIntro.addEventListener('click', ()=>{
      indexIntro = indexDotIntro;
      leftIntro=(-975)*indexIntro;
      activeDotIntro();
   })
})

nextIntro.addEventListener('click', nextSlideIntro);
prevIntro.addEventListener('click', prevSlideIntro);