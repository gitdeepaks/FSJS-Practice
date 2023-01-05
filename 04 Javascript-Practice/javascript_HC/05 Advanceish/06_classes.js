class userName{
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    #courseList = [];

    getInfo() { 
        return {name: this.name, email: this.email};
     }

     enrollCourse(name){
        this.#courseList.push(name);
     }

     getCourseList() {
        return this.#courseList;
     }

    login(){
        return "You are logged in.";
     }
}


class subAdmin extends userName {
constructor(name, email){
    super(name, email);
}

    getAdminInfo() {
        return "I an subadmin"
    }

    login(){
        return "for login for admin only"
    }
}

module.exports = userName;


const rock = new userName("rock", "rock@lco.dev");


console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");

console.log(rock.getCourseList());
console.log(rock.courseList);

const tom =  new subAdmin("tom", "tom@lco.dev");
console.log(tom.getAdminInfo());
console.log(tom.login());

console.log(tom.getInfo());