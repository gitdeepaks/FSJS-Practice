const button = document.getElementById('button');
const toasts = document.getElementById('toast');



const message = [

    'Message One',    
    'Message Two' ,   
    'Message Three',   
    'Message Four'    
]

const types = ['info', 'success', 'error']


button.addEventListener('click', () => {
    createNotifocation()

    function createNotifocation(message = null, type = null) {
        const notif = document.createElement('div')
        notif.classList.add('toast')
        notif.classList.add(type ? type : getRandomType())

        
        notif.innerText = getRandomMessage()
        
        toasts.appendChild(notif)

        setTimeout(() => {
            notif.remove()
        }, 4000)
    }
})


function getRandomMessage() {
    return message[Math.floor(Math.random() * message.length)]
}
function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}