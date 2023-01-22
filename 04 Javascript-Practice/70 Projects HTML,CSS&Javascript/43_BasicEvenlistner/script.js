document.addEventListener("dblclick", hello)
function hello() {
    document.getElementById('js').innerText =  "Mouse Clicked"
}


// click, double click, mouseenter, mouseleave, mouseover, input,keydown, keypress, keyup, onload.


document.addEventListener('keydown', hello2)


function hello2() {
    document.getElementById('jsw').innerHTML = "mosueenter here..."
}