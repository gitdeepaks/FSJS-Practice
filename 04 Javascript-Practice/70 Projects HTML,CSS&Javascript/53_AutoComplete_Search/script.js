let availableJeyWords = [

    'HTMl',
    'CSS',
    'Javascript',
    'Dom Maniuplation',
    'Dom Maniuplation',
    'Web Development',
    'How to Start Coding',
    'How to make Project in Javascript',
]

const resultBox = document.querySelector('.result-box');
const inputBox = document.getElementById('input-box');

inputBox.onkeyup = function () {
    let result = []
    let input = inputBox.value

    if (input.length) {
        result = availableJeyWords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase())
            console.log(result);
        });
    }
    display(result);
    if (!result.length) {
        resultBox.innerHTML = ''
    }
}

function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>";
    })
    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}


function selectInput(list) {
    inputBox.value = list.innerHTML
}