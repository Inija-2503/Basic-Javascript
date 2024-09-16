// spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]


//rest
function myBio(firstName, lastName, ...otherInfo) {
    return otherInfo;
  }
  console.log(myBio("John", "Doe", "Developer", "Male")); // ["Developer", "Male"]

// destructuring
// array example
const array = [1, 2, 3];
const [first, second, third] = array;
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
//object example
const obj = { a: 1, b: 2 };
const { a, b } = obj;
console.log(a); // 1
console.log(b); // 2
