var User = function(firstName, courseCount)  { 
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function() { 
        console.log(`${this.courseCount}`);
    };
};


User.prototype.getFirstname = function() {
    console.log(`your firstname is ${this.firstName}`);
}

var deepak = new User("deepak", 2);
deepak.getCourseCount();

if (deepak.hasOwnProperty("firstname")) {
    deepak.getFirstname();
    
}


// console.log(deepak.firstName);

// console.log(deepak);

var sam = new User("sam", 1);
// console.log(sam);
sam.getCourseCount();
sam.getFirstname(); 