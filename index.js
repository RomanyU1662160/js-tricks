// https://www.youtube.com/watch?v=4mmd2NrvLDw

//How to Swap first element woth the last element 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let res = [arr[0], arr[8]] = [arr[8], arr[0]]
let slice = arr.slice(0, 2); // will modify the original and retur n new arr // arr = [a,2,34,5,6,7,8,9] 
//let splice = arr.splice(0, 2); // will modify the original and retur n new arr //[4,5,6,7,8,9] 
//console.log('res', res);

console.log('slice  :::->>>', slice);
//How to Swap two numbers 
let a = 5; let b = 10;
// a = (b+=a  -=b) -a
a = (b += a -= b) - a

console.log(a, b);




// create aliases(new vars ) fro object propreties

let policy = { id: "123-456-789", holder: "user1", holder2: "user2" }

let { holder: mainDriver } = policy

console.log('main driver', mainDriver);



let fruits = ["apple", 'banana', "apple", 'banana', "orange"];
let newSet = [...new Set(fruits)];

console.log(newSet);




