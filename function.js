//functions servers  as a reuseability and argument is passed

function sum(a,b,c=5) {
    return a+b+c;//the keyword return is used to return the value to the  result variable
}

result=sum(3,4);
console.log("the sum of two numbers is:",result);

//arrow function

const funcname=(x)=>{
    console.log("the value of x is ",x)
}
funcname(5);
funcname(6);
funcname(7);
