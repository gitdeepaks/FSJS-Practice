var isEven = (element) => {
    // if (element %2 === 0) {
    //     return true;
        
    // }
    // return false;

    return element % 2 === 0;
    
}

// console.log(isEven(2));

// var result1 =  [2,3,6,8].every(isEven);

// console.log(result1);



var result1 =  [2,4,6,8].every((e) => (e % 2 === 0));

console.log(result1);