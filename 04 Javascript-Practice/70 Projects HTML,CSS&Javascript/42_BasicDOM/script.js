const list = `
    <li>Rohit</li>
    <li>Manas</li>
    <li>Binod</li>
    <li>Anurag</li>
    <li>Vishal</li>


`;
const btn = document.getElementById("fsjs2");

const ul = document.querySelector('ul');

ul.innerHTML = list;


// create Element on screen

let title = document.createElement("h1");
title.className = "title";
title.style.fontSize = "25px";
title.style.color = "green";
title.textContent = "Creating New Element in DOM  in Day 2"

console.log(title);
document.body.appendChild(title);
// document.body.removeChild(title);


// for loop

for (let i = 0 ; i < 3 ; i++) {
    let para = document.createElement("p")
    para.className = "fsjs"
    para.style.fontSize = "18px"
    para.style.color = "violet"
    para.textContent = i
    document.body.appendChild(para);
}

function math() {
   let val =  prompt("Solve this 50 - 30");
   if (val == 20){
    document.getElementById("js").innerText = "success redirect"
    btn.style.backgroundColor = "green";
   }
   else {
    document.getElementById("js").innerText = "Fail try again"
    
    btn.style.backgroundColor = "red";
   }
}

math();