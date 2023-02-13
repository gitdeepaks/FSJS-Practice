const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const sec = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const load = document.getElementById('loading');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

//set bg year
year.innerText = currentYear + 1;


//update coundown time
function updateCountDowen() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24)
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d
    hours.innerHTML = h < 10 ? '0' + h : h
    minutes.innerHTML = m < 10 ? '0' + m : m
    sec.innerHTML = s < 10 ? '0' + s : s
}


//show spinner
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000)
//run every second

setInterval(updateCountDowen, 1000)