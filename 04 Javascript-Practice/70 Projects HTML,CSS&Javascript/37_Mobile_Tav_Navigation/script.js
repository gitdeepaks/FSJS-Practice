const contents = document.querySelectorAll('.content');
const lisItems = document.querySelectorAll('nav ul li');


lisItems.forEach((item, idx) => {
    item.addEventListener('click', () =>{
        hideAllContents()
        hideAllisItems()

        item.classList.add('active');
        contents[idx].classList.add('show');
    })
})


function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}


function hideAllisItems() {
    lisItems.forEach(item => item.classList.remove('active'))
}