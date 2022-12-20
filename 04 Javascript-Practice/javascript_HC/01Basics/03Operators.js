// // + - * %

// var num1 =7;
// var num2 =6;

// console.log(num1+num2);
// console.log(num1*num2);

// var ans = num1 > num2 ;

// console.log(ans);

// D = (L - S)/L * 100;

var sellingPrice = 199;
var listPrice= 799;
var discountPrice = ((listPrice - sellingPrice)/listPrice) * 100;


console.log(discountPrice)


displayDiscountPercentage = Math.round(discountPrice);

console.log(typeof displayDiscountPercentage + "% off");