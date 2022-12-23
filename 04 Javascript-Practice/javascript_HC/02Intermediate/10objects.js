var user = {
    firstName : 'John',
    lastName: 'Smith',
    role: "Admin",
    loginCount : 88,
    facebookSignin: true,
}

console.log(user.firstName);
console.log(user['lastName']);


console.log(user.loginCount);
user.loginCount =44;
console.log(user.loginCount);

console.log(user);
console.table(user);
