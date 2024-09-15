//for loop
let a = 10;
for (let i=0;i<10;i++) {
    console.log(a+i);
}

// for in loop
let obj={
    Name:"Inija",
    ID:123,
    Place:"tiptur"

}
for (const key in obj) {
        const element = obj[key];
        console.log(key , element);
}
// for of
for (const c of "Inija") {
   console.log(c);
}

// while
let r = 0;
while (r<10) {
    console.log(r);
    r++
    
}

//do while
let n = 5
do {
    console.log(n);
    n++;
} while (i<20);