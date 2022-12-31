const deepak = {
    fName : "Deepak",
    lName : "Sankhyan",
    role : "Admin",
    courseCount : 4,
    getInfo : function() {
        console.log(`
        FirstName is ${this.fName}
        lastName is ${this.lName}
        His role is ${this.role}
        and his course count is ${this.courseCount}
        
        `);
    },

};




const dj = {
    fName :"Rock",
    lName :"DJ",
    role : "subAdmin"
};

// deepak.getInfo();
// dj.getInfo();


deepak.getInfo.bind(dj);