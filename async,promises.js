//promises has 2 states
//state and result
//promises is used to tell the users if u have passed or failed to get the results


//Async

async function js() {
    let array = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("can insert elements");
        }, 1000);
    });
    
    let set = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("enter keys and values");
        }, 3000);
    });

    // Used console.log instead of alert
    //array.then(console.log);
    //set.then(console.log);

    console.log("fetching the data pls wait")
    let arr = await array
    console.log("Here is your answer" + arr)
    let set1 = await set
    console.log("insert your values" + set1)
    return[arr,set1]
}""

console.log("Hi everyone");
let a = js();
console.log(a)
