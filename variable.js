// variables usage
var a = 6; // var act as a global scope here
var b = 7;//most of the time this keyword is not allowed
var c = "inija";
console.log(a+b+c);
console.log(typeof a, typeof b, typeof c); // gives u the type of datatype the value is in as a result
let a1 = 5;//let keyword is used when it is limited to that particular block
{
    let a = 55;
    console.log(a)
}
console.log(a)
const d = 88;// the value written in const does not changes
console.log(d)
// const d = 66;
// d=d+1; // both the stat is not allowed