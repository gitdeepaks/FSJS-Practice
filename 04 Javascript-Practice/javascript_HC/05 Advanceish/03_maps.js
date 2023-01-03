var myMap = new Map();

myMap.set(1, "Uno")
myMap.set(2, "dos")
myMap.set(3, "Tres")
myMap.set(4, "Cuatro")
myMap.set(5, "Porfobor")


console.log(myMap);


// for(let key in myMap) {
//     console.log(`key is ${key}`);
// }
// for(let key in myMap.values()) {
//     console.log(`Value is ${values}`);
// }


// for(let [key, value] in myMap) {
//     console.log(`Value is ${value} & ${key}`);
// }


myMap.forEach( (key, value) => console.log(`${key} & ${value}`))

myMap.delete(2);
console.log(myMap);