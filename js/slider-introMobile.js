const prevMobile = document.querySelector('.slider-intro__prev_mobile');
const nextMobile = document.querySelector('.slider-intro__next_mobile');
const slidesMobile = document.querySelectorAll('.slider-intro__item');
// const slidesWrapper = document.querySelector('.switch__item_wrapper');
const dotsMobile = document.querySelectorAll('.slider-intro-dots__item_mobile');
const dotsBorderIntroMobile = document.querySelectorAll('.slider-intro-dots__item_mobile div');
const textSliderIntroMobile = document.querySelectorAll('.slider-intro-about__text');

let indexMobile = 1;
// let leftMobile = 0;

const activeSliderMobile = () => {
   for (let slideMobile of slidesMobile){
      slideMobile.classList.remove('slider-intro__item_active');
   }
   slidesMobile[indexMobile].classList.add('slider-intro__item_active');

   for (let textIntroMobile of textSliderIntroMobile){
      // console.log(slidesIntro);
      textIntroMobile.classList.remove('slider-intro-about__text_active');
   }
   textSliderIntroMobile[indexMobile-1].classList.add('slider-intro-about__text_active');
}

const activeDotMobile = () => {
   for (let dotMobile of dotsMobile){
      dotMobile.classList.remove('active__dot');
   }
   dotsMobile[indexMobile-1].classList.add('active__dot');

   for (let dotBorderMobile of dotsBorderIntroMobile){
      dotBorderMobile.classList.remove('active__border');
   }
   dotsBorderIntroMobile[indexMobile-1].classList.add('active__border');
}



const prevSlideMobile = () => {
   if(indexMobile == 1 ){
      indexMobile = slidesMobile.length - 1;
      // left = (-97*(slides.length-1));
      activeSliderMobile();
      activeDotMobile();
   }
   else{
      indexMobile--;
      // left += 97;
      activeSliderMobile();
      activeDotMobile();
   }
}

const nextSlideMobile = () => {
   if(indexMobile == slidesMobile.length -1 ){
      indexMobile = 1;
      // left = 0;
      activeSliderMobile();
      activeDotMobile();
   }
   else{
      indexMobile++;
      // left -= 97;
      activeSliderMobile();
      activeDotMobile();
   }
}

dotsMobile.forEach((itemMobile, indexDotMobile)=>{
   itemMobile.addEventListener('click', ()=>{
      indexMobile=indexDotMobile+1;
      // left=(-97)*index;
      activeSliderMobile();
      activeDotMobile();
   })
})

nextMobile.addEventListener('click', nextSlideMobile);
prevMobile.addEventListener('click', prevSlideMobile);