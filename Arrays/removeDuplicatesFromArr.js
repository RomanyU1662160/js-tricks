// set in js not allow duplicates

const arr = [1, 2, 2, 2, 3, 3, 3, 4, 5];

const arr2 = [
  { name: "ahmed", age: 20 },
  { name: "ahmed2", age: 20 },
];
const arr3 = [...new Set([...arr2, { name: "ahmed2", age: 20 }])];

const uniqueArr = [...new Set(arr)]; // create a new set and use spread operator to convert it to array

console.log("uniqueArr  :::->>>", uniqueArr);

console.log("arr3 :::>>>", arr3);
