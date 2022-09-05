const prevIntro = document.querySelector('.slider-intro__prev');
const nextIntro = document.querySelector('.slider-intro__next');
const slidesIntro = document.querySelectorAll('.slider-intro__item');
const slidesWrapperIntro = document.querySelector('.slider-intro__wrapper');
const dotsIntro = document.querySelectorAll('.slider-intro-dots__item');
const dotsBorderIntro = document.querySelectorAll('.slider-intro-dots__item div');
const textSliderIntro = document.querySelectorAll('.slider-intro-about__text');

let width = screen.width;
if (width>=1100){
   let indexIntro = 0;
   let lestStart = -500;
   if(width<=1300){
      lestStart = -700;
   }
   let leftIntro = lestStart;
   let leftConst = 950+25;
   if(width<=1300){
      leftConst = width-245;
   }

   const activeSliderIntroText = () => {
      for (let textIntro of textSliderIntro){
         // console.log(slidesIntro);
         textIntro.classList.remove('slider-intro-about__text_active');
      }
      textSliderIntro[indexIntro].classList.add('slider-intro-about__text_active');
   }

   const activeDotIntro = () => {
      for (let dotIntro of dotsIntro){
         dotIntro.classList.remove('active__dot');
      }
      dotsIntro[indexIntro].classList.add('active__dot');

      for (let dotBorderIntro of dotsBorderIntro){
         dotBorderIntro.classList.remove('active__border');
      }
      dotsBorderIntro[indexIntro].classList.add('active__border');

      slidesWrapperIntro.style.left = `${leftIntro}px`;
   }

   const prevSlideIntro = () => {
      if(indexIntro == 0 ){
         indexIntro = slidesIntro.length -2;
         leftIntro = (-leftConst*(slidesIntro.length-2))+lestStart;
         slidesWrapperIntro.style.left = `${leftIntro}px`;
         activeSliderIntroText();
         activeDotIntro();
      }
      else{
         indexIntro--;
         leftIntro += leftConst;
         slidesWrapperIntro.style.left = `${leftIntro}px`;
         activeSliderIntroText();
         activeDotIntro();
      }
   }

   const nextSlideIntro = () => {
      if(indexIntro == slidesIntro.length - 2 ){
         indexIntro = 0;
         leftIntro = lestStart;
         slidesWrapperIntro.style.left = `${leftIntro}px`;
         activeSliderIntroText();
         activeDotIntro();
      }
      else{
         indexIntro++;
         leftIntro -= leftConst;
         slidesWrapperIntro.style.left = `${leftIntro}px`;
         activeSliderIntroText();
         activeDotIntro();
      }
   }

   dotsIntro.forEach((itemIntro, indexDotIntro)=>{
      itemIntro.addEventListener('click', ()=>{
         if(indexIntro!=indexDotIntro){
            indexIntro = indexDotIntro;
            leftIntro=(-leftConst)*indexIntro+lestStart;
            activeSliderIntroText();
            activeDotIntro();
         }
      })
   })

   nextIntro.addEventListener('click', nextSlideIntro);
   prevIntro.addEventListener('click', prevSlideIntro);
   setInterval(nextSlideIntro, 7000);
}