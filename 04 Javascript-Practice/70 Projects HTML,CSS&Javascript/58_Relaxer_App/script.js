const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;

const breathTime = (totalTime / 5) * 2;

breathAnumatiuon();

const holdTime = totalTime / 5;

function breathAnumatiuon() {
    text.innerText = 'Breath in!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breath Out!';
            container.className = 'container shrink'
        }, holdTime)

    }, breathTime);
}


setInterval(breathAnumatiuon, totalTime);