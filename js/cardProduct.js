const prev = document.querySelector('.switch__prev');
const next = document.querySelector('.switch__next');
const slides = document.querySelectorAll('.card__img');
const slidesWrapper = document.querySelector('.switch__item_wrapper');
const dots = document.querySelectorAll('.switch__item');

let index = 0;
let left = 0;

const activeSlider = () => {
   console.log(slides);
   for (let slide of slides){
      slide.classList.remove('img__active');
   }
   slides[index].classList.add('img__active');
}

const activeDot = () => {
   for (let dot of dots){
      dot.classList.remove('switch__active');
   }
   dots[index].classList.add('switch__active');
}

const moveSwitch = () => {
   slidesWrapper.style.left = `${left}px`;
}

const prevSlide = () => {
   if(index == 0 ){
      index = slides.length -1;
      left = (-97*(slides.length-1));
      moveSwitch();
      activeDot();
   }
   else{
      index--;
      left += 97;
      moveSwitch();
      activeDot();
   }
}

const nextSlide = () => {
   if(index == slides.length -1 ){
      index = 0;
      left = 0;
      moveSwitch();
      activeDot();
   }
   else{
      index++;
      left -= 97;
      moveSwitch();
      activeDot();
   }
}

dots.forEach((item, indexDot)=>{
   item.addEventListener('click', ()=>{
      index=indexDot;
      left=(-97)*index;
      activeSlider();
      activeDot();
   })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);