//use of literals

//let name = 'Inija';
//let b = `My name is ${name}`;
//console.log(b);

// length
arr=[1,2,3,4,5]
console.log(arr.length)

//push
arr.push(6)
console.log(arr)

//pop
arr.pop()
console.log(arr)

//shift bro of pop
arr.shift()
console.log(arr)

//unshift
arr.unshift(7)
console.log(arr)

//concat
arr1=[3,4,5]
arr2=[1,2,6]
console.log(arr2.concat(arr1))

//join
console.log(arr.join("and"))

//slice
console.log(arr.slice(1,3))

//splice'
arr.splice(2, 1, "a", "b");
console.log(arr); 

//map
console.log(arr.map(e => e*2))

//filter
const gtf = (e) =>{
    if(e>5){
        return true
    }
    return false
}
console.log(arr.filter(gtf))

//reduce
arr3 = [6,7,8]
let red = arr3.reduce((a,b) => a+b);
console.log(red) 

//Array from(convert anything into array)
console.log(Array.from("Inija"))