const prev = document.querySelector('.slider-works__prev');
const next = document.querySelector('.slider-works__next');
const slides = document.querySelectorAll('.slider-works__item');
const slidesWrapper = document.querySelector('.slider-works__wrapper');
const dots = document.querySelectorAll('.slider-works-dots__item');

let index = 0;
let left = 0;

const activeSlider = () => {
   for (let slide of slides){
      slide.classList.remove('active');
   }
   slidesWrapper.style.left = `${left}px`;
   slides[index].classList.add('active');
}

const activeDot = () => {
   for (let dot of dots){
      dot.classList.remove('active__dot');
   }
   dots[index].classList.add('active__dot');
}

const prevSlide = () => {
   if(index == 0 ){
      index = slides.length -1;
      left = (-425*(slides.length-1));
      activeSlider();
      activeDot();
   }
   else{
      index--;
      left += 425;
      activeSlider();
      activeDot();
   }
}

const nextSlide = () => {
   if(index == slides.length -1 ){
      index = 0;
      left = 0;
      activeSlider();
      activeDot();
   }
   else{
      index++;
      left -= 425;
      activeSlider();
      activeDot();
   }
}

dots.forEach((item, indexDot)=>{
   item.addEventListener('click', ()=>{
      index=indexDot;
      left=(-425)*index;
      activeSlider();
      activeDot();
   })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);