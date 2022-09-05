document.addEventListener('DOMContentLoaded', function(){
   const form = document.getElementById('form');
   form.addEventListener('submit', formSend);

   async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);

      let formData = new FormData(form);

      if(error === 0){
         form.classList.add('_sending')
         let response = await fetch('../sendmail.php', {
            method: 'POST',
            body: formData
         });
         if(response.ok){
            let result = await response.json();
            // alert(result.message);
            form.reset();
            form.classList.remove('_sending');
         }else{
            // alert('Error');
            form.classList.remove('_sending');
         }
      }else{

      }
   }
   
   function formValidate(form){
      let error = 0;
      let formReq = document.querySelectorAll('._req');
      let fakeInput = document.querySelector('.fakeinput')

      for(let input of formReq){
         formRemoveError(input);
         if(input.classList.contains('_email')){
            if(!emailTest(input)){
               formAddError(input);
               error++;
            }
         }
         else if(input.classList.contains('_phone')){
            if(!phoneTest(input)){
               formAddError(input);
               error++;
            }
         }
         else if (input.getAttribute("type")==="checkbox" && input.checked === false){
            formAddError(input);
            formAddError(fakeInput);
            error++;
         } else {
            formRemoveError(fakeInput);
               if (input.value === ''){
                  formAddError(input);
                  error++;
            } 
         }
      }
      return error;
   }
   function formAddError(input){
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
   }
   function formRemoveError(input){
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
   }
   function emailTest(input){
      return  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(input.value);
   }
   function phoneTest(input){
      return  /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(input.value);
   }
});