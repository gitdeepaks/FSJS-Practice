//Conditions

//IfElse

//switchcase

//Ternary opearator or Conditions

let rating = 5;

if (rating == 5) {
  console.log("5 Satrs");
} else if (rating == 4) {
  console.log("4 Satrs");
} else if (rating == 3) {
  console.log("3 Satrs");
} else {
  console.log("i am else");
}

// switchcase

let user = "Admin";

switch (user) {
  case "Admin":
    console.log("REdirect to Admin page");
    break;
  case "MENTOR":
    console.log("REdirect to mentor page");
    break;
  default:
    console.log("simple user");
}

// ternary case

// Condition?True:false

let raining = false;

raining ? console.log("it is not raining") : console.log("its not raining");

// Arrays

let name = ["animation", "pictures", "design", "implementation"];

console.log(name);
console.log(name[2]);

// objects

let bankAccount = {
  acnumber: "12334453322",
  fName: "nabeel",
  lName: "saukat",
  Mob: "9999889999",
  balance: "9889999",
};

console.log(bankAccount);
console.log(bankAccount, balance);

const now = new Date();
console.log(now);
