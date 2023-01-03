// //destructuring of data


// const user = ["deepak", 4, "admin"];
// // var role = user[2];
// // var name = user[0];

// var [name1, cC, rle] = user;

// console.log(rle);

const myUser = {
    name1: 'deepak',
    courseCount: 7,
    role: "admin",
};

console.log(myUser.courseCount);

const {name, courseCount, role} = myUser

console.log(courseCount);