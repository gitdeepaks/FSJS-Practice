var user = {
    firstName : "John",
    lastName: "Smith",
    role: "Admin",
    loginCount : 88,
    facebookSignin: true,
    courseLists: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
      },
      getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
      },
    };




    // var user = {
    //     firstName: "Hitesh",
    //     lastName: "Choudhary",
    //     role: "Admin",
    //     loginCount: 32,
    //     facebookSignedIn: true,
    //     courseList: [],
    //     buyCourse: function (courseName) {
    //       this.courseList.push(courseName);
    //     },
    //     getCourseCount: function () {
    //       return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    //     },
    //   };
    
    var courseList = true;
    console.log(user.firstName);
    console.log(user.getCourseCount());
    user.buyCourse("React JS course");
    user.buyCourse("Angular course");
    console.log(user.getCourseCount());