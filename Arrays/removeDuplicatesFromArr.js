// set in js not allow duplicates 

const arr = [1, 2, 2, 2, 3, 3, 3, 4, 5]

const uniqueArr = [...new Set(arr)]   // create a new set and use spread operator to convert it to array 



console.log('uniqueArr  :::->>>', uniqueArr);