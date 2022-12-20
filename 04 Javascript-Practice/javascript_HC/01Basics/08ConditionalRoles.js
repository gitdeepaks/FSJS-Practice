var user = "testprep"

switch (user) {
    case "admin":
         console.log("you get full access");
        
        break;
        case "subadmin":
            console.log("you can creat/delete the courses");
           
           break;

           case "testprep":
            console.log("you can get access to creat/delete test");
           
           break;
           case "user":
            console.log("gets access to consume content");
           
           break;


    default:
        console.log('Trail use');
        break;
}