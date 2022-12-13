const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errMsg = document.getElementById('err-msg')


linkForm.addEventListener('submit', formSuibmit)

function formSuibmit(e){
    e.preventDefault()

   if (input.value === ''){
    errMsg.innerHTML = 'Please enter somthjing'
    input.classList.add('boder-red')
   }

}