let val;

// number to string representation

// Number to string
val = String(885);
val = String(4+4);
// Bool too string
val = String(true);
// date to string
val = String(new Date())
// Array to string
val = String([1,2,3,4,5]);


// toString
val = (5).toString();
val = (true).toString();

// string to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('null');
val = Number([1,2,3]);


// parse-int
val = parseInt('100.44');

// parseFloat
val = parseFloat('100.44');


// output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed());

const val1 = 5;
const val2 = 6;
const sum = val1 + val2;


console.log(sum);
console.log(typeof sum);


