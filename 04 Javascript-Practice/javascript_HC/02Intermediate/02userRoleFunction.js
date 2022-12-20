

function getuserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name}-admin with all the access`;
            // break;
        case "subadmin":
            return `${name}-subadmin with to create and delete courses`;
            // break;
        case "testprep":
            return `${name}-testprep with to create and delete courses`;
            // break;
        case "user":
            return `${name}-user with to create and delete courses`;
            // break;
    
        default:
            return `${name}-is a trial user `;
            break;
    }
}


console.log(getuserRole("deepak", "testprep"));


var getRole = getuserRole("John", "admin");

console.log(getRole);