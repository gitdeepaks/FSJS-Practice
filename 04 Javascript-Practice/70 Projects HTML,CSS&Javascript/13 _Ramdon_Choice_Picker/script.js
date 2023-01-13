const tagsEL = document.getElementById('tags');
const textarea = document.getElementById('textarea');


textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 100)
        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    tagsEL.innerHTML = ''
    tags.array.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagEl.appendChild(tagEl)
        
    });

    setTimeout(() =>{
        clearInterval(interval)
        const randonTag = pickRandomTag()

        hilightTag(randonTag)

        setTimeout(() => {

        }, 100)
    }, times * 100)
}

function randomSelect() {
    const times = 30 

    const interval = setInterval(() => {
        const randonTag = pickRandomTag();

        hilightTag(randonTag)

        setInterval(() => {
            unHilightTag(randonTag)
        })
    }, 100);
}


function pickRandomTag() {
    const tags =  document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]    
}

function  hilightTag(tag) {
    tag.classList.add('hilight');
}


function unHilightTag(tag) {
    tag.classList.remove('hilight');
}