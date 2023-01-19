const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code,idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.keyCode >= 0 && e.key <= 9) {
            code[idx].value = ''
            setTimeout(() => codes[idx + 1].focus(), 10 )
            codes[idx + 1].focus();
        }else if (e.key === 'Backspcae'){
            setTimeout(() => codes[idx - 1].focus(), 10 )
        }
    })
})