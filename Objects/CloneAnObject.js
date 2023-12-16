// objects, functions, arrays are passed by reference, when we copy or reassign it ,
// it will be passed by reference, any changes will affect the reference

// strings and numbers are primitive, it passed by value changes will not affect the source



/*
 Objects :: non-primitive passed by reference
To clone:: use JSON.prase(JSON.stringify()) or spread operator {... } 
*/
const object1 = {
    name: "Romany",
    lname: "Sefen",
    address: "HD4 5LR"
}
const object2 = object1
object2.phone = "074444" // changes to object2 will affect object 1

console.log("object1 === object2", object1 === object2) // true

// how to clone an object 
// stringify to convert to be primitive string,  then  to object by parse
const object3 = JSON.parse(JSON.stringify(object1))
console.log("object1 === object3", object1 === object3) // false

// spread operator
const object4 = { ...object1 }
console.log('object4 === object1  :::->>>', object4 === object1);



/*
Clone Arrays ::: 
*/
const arr1 = [1, 2, 3, 4];
const arr2 = arr1
arr2.push(5)  // changes to arr2 will update arr1,because it passed by reference

console.log('arr1  :::->>>', arr1); // 1,2,3,4,5
console.log('arr1===arr2  :::->>>', arr1 === arr2); //true

// spread operator to clone array without affecting the original one 
const arr3 = [...arr1]
console.log('arr1 ===arr3  :::->>>', arr1 === arr3); //false



/*
Strings and Numbers are primitive and passed by value 
*/
let string1 = "string1"
let string2 = string1
string2 = string2 + "updated"
console.log('string1 == string2  :::->>>', string1 == string2);

