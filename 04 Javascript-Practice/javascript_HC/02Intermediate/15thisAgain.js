console.log(this);

var user = {
    fName: "Deepak",
    courseCount: 4,
    getCourseCount: function () { 
        console.log("LINE 7", this);
        function sayHello(){
            console.log("hello");
            console.log("Line 10", this);
        }
        sayHello();
},

};

user.getCourseCount();
