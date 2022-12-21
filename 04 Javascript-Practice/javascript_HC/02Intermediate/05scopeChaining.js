var name1 = "Deepak";

console.log("line no 3", name1);

function sayName(){
    var name1 = "MY D";
    console.log("line no 7", name1);
    sayNameTwo();

    function sayNameTwo(){
        console.log("line no 11", name1);
    }
}
sayName();

