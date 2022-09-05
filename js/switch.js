const switchBtn = document.querySelectorAll('.switch__item');
const productsSwitch = document.querySelectorAll('.products__item_wrapper');

let index = 0;

const activeProduct = () => {
   for (let product of productsSwitch){
      product.classList.remove('active__product');
   }
   productsSwitch[index].classList.add('active__product');
}

const activeBtn = () => {
   for (let btn of switchBtn){
      btn.classList.remove('active__switch');
   }
   switchBtn[index].classList.add('active__switch');
}

switchBtn.forEach((item, indexDot)=>{
   item.addEventListener('click', ()=>{
      index=indexDot;
      activeProduct();
      activeBtn();
   })
})
