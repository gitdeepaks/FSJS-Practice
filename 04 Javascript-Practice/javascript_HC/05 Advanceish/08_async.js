const uno = () => {
   
    console.log("i am One");
}
const dos = () => {
    setTimeout( () => {
        console.log('Woohooo');
    }, 3000)
    console.log("i am Two");
}
const tres = () => {
    console.log("i am Three");
}


uno();
dos(); 
tres();