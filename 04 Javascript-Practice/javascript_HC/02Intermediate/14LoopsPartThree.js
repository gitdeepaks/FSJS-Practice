// const names = ["YT","INSTA","FB ","NF","AMZ"];

// for(const n  of names){
//     console.log(n);
// }

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    lco: ":earCodeOnline.in"


}

for(const n in symbols){
    console.log(`Keys is ${n} and the value is: ${symbols[n]}` );
}
