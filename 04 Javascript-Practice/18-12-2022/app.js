// // function

// function sum() { //Defination of function
//     let num1 =16;
//     let num2 =25;

//     console.log(num1+num2);
// }


// sum(16, 27);//calling function
// sum(52, 61);
// sum(10, 29);
// sum(80, 90);
// sum(80, 100);


//  Function with Return Type



// function adding(val3,val4) {
//     let result = val3 + val4;
//     return result;
// }

// let sum= adding(40, 60);

// console.log(sum);



// function sum(arr) {
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum = sum + i;
//     }
//     return sum;
// }

// let summary = [1,2,3,4,5,6,7,8];
// let arrresult = sum(summary);
// console.log(arrresult);


// function nini(){
//     // Arguments
//     let sum = 0;
//     for(let i=0; i<arguments.length; i++){
//         sum = sum + arguments[i];
//     }
//     return sum;
// }

// console.log( nini(7,7,8,9,10,11,12,14,15));



// let shiva =() => {
//     console.log('JS is different' ,var1, var2);
// };
// shiva(1,2);


// let manas = () => {
//     console.log('JS is different');

// };

// manas();

let userName ={
    firstName: 'John',
    lastName: 'Doe',
    role: 'admin',
    loinCount: 82,
};


// console.log(userName[userName.role]);

// userName.loinCount = 61;

// console.log(userName);


// for in

for (let x in userName) {

    console.log(userName[x]);
}

