let widthBurger = screen.width;
if (widthBurger<=895){
   const burgerMenu = document.querySelector('.nav__burger');
   if(burgerMenu){
      const menuBody = document.querySelector('.nav__items');
      menuBody.addEventListener('click', function(e){
         document.body.classList.toggle('_scrolLLock');
         burgerMenu.classList.toggle('_activeBurger');
         menuBody.classList.toggle('_activeBody');
      })
      burgerMenu.addEventListener('click', function(e){
         document.body.classList.toggle('_scrolLLock');
         burgerMenu.classList.toggle('_activeBurger');
         menuBody.classList.toggle('_activeBody');
      })
   }
}