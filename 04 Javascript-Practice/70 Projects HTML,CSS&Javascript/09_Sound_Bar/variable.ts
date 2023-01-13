const label = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerHTML
    .split('')
    .map((letter, idx) => `<span> ${letter}</span>`)
    .join('');
});