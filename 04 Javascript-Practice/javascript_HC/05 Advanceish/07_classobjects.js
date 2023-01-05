// import userName from "./06_classes";

const userName = require("./06_classes.js");

const deepak =  new userName("deepak", "deepak@lco.dev");


console.log(deepak.getInfo());

deepak.enrollCourse("React Bootcamp")
deepak.enrollCourse("Angular Bootcamp")

console.log(deepak.getCourseList());

let courses = deepak.getCourseList();


courses.forEach(c => console.log(c));



