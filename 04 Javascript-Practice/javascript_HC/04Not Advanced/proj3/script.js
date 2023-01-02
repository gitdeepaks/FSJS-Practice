const courses = [
    {
        name: "complete ReactJS course",
        price: "2.3"
    },
    {
        name: "complete Angular course",
        price: "2.1"
    },
    {
        name: "complete MERN course",
        price: "2.7"
    },
    {
        name: "complete C++ course",
        price: "2.8"
    },
    {
        name: "complete Django course",
        price: "3.8"
    }
];

function generateList() {
    const ul = document.querySelector(".list-group")
    ul.innerHTML = ""
    courses.forEach( course => {

        const li = document.createElement("li")
        li.classList.add("list-group-item")

        const name = document.createTextNode(course.name)
        li.appendChild(name)

        const span = document.createElement("span")
        span.classList.add("float-right")
        const price = document.createTextNode("$" + course.price)
        span.appendChild(price)

        li.appendChild(span);
        ul.appendChild(li);

    });
}


// generateList();

window.addEventListener("load", generateList);


const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
    courses.sort( (a, b) => a.price - b.price );
    generateList();
})