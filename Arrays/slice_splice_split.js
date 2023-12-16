/*
https://www.freecodecamp.org/news/lets-clear-up-the-confusion-around-the-slice-splice-split-methods-in-javascript-8ba3266c29ae/
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8]

/*
** slice
*/
// return new array and not modify original 
// start from index 0 until index before the 3 index
// slice do not include the until in the result

const slice = arr.slice(1, 4)  // 2,3,4


// console.log('slice  :::->>>', slice);
// console.log('original  :::->>>', arr);


/*
** Splice 
*/
//  remove items form the original array and modify it 
// creates a new array with range provided
// will remove all items from index 1 to 4, and return new array with them  
const split = arr.splice(1, 4)
console.log('split  :::->>>', split); // 2,3,4,5
console.log('original  :::->>>', arr); // 1,6,7,8


// splice 2 will return items from index 1 to 2 
// and add 9 instead of index 1 to original array  
const arr2 = [0, 1, 2, 3]
const splice2 = arr2.splice(1, 2, 9)
console.log('splice2  :::->>>', splice2);
console.log('arr2  :::->>>', arr2);


/*
Split is for strings  
*/
const fullName = "Romany Sefen";

const fname = fullName.split(" ")[0] //Romany
const lname = fullName.split(" ")[1] //Sefen
console.log('fname  :::->>>', fname);
console.log('lname  :::->>>', lname);
console.log('fullName  :::->>>', fullName);

const fnameSlice = fname.slice(0, 4)
console.log('fnameSlice  :::->>>', fnameSlice);
// slice can be used in arrays and strings
// splice can only be used in arrays
// split  can only be used in strings
