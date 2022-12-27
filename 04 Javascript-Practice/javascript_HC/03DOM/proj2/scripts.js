const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

// var orabgeELement = getBGColor(orange);

// orange.addEventListener('mouseenter', () => {
//   center.style.background = orangeELementColor; 

// })

// var color = getBGColor(pink);
 
// pink.addEventListener("click", () => {
//   center.style.backgroundColor = color;
// })

const magicColorChnager = (element, color) => {
  return element.addEventListener("click", () => {
    center.style.backgroundColor = color;
  });
};


magicColorChnager(red, getBGColor(red));
magicColorChnager(cyan, getBGColor(cyan));
magicColorChnager(violet, getBGColor(violet));
magicColorChnager(pink, getBGColor(pink));