// Array in Depth an For of loop


let names = ['Deepak','Hitesh', 'Surya']
console.log(names);
console.log(names.length)
names[2] = "Lala"

// slice

console.log(names.slice(1,2));

// splice insert valie inside arrays

names.splice(2,0,'Heera', 'panna')

console.log(names);


// Convatenation of arrays
let role = ['manger','lead','product-specialists']
let person = [2,3,4,5,2,1]

console.log(person.concat(role));


// fill
let arr5 = [1,2,3,4,5,656];
arr5.fill('Hitesh','Rama',2,4);
console.log(arr5);


// include

let num = [1,2,3,4,5,6,7];
console.log(num.includes(6,5));
console.log(num.includes(6,6));


// index of
let num1 = [1,2,3,4,5,6,7,8,9];

console.log(num1.indexOf(5));

let arr8 = [1,2,3,4,5,6,7,8]
console.log(arr8.join('johndoe'));

// 
// For of

// lastindexof


// for of

// let fruit = ["apple","ginger","babdaapple","babdaginger","babdaginger","bundle"];
// // let Upperfruit= [];empty array
// for(let babaletter of fruit) {

//     letUpperfruit.push(badaletter.toUpperCase());

// }
console.log(Upperfruit);

// braek and continue

for(let i=0; i<=5; i++) {
    if (i==3){
        break
}
console.log(i);
}

// Array Methode in JS & write a blog on it 