// return the non-paired number from an array

/*
A non-empty zero-indexed array A consisting of N integers is given.
The array contains an odd number of elements, and each element of the array
 can be paired with another element that has the same value, except for one
 element that is left unpaired.
For example, in array A such that:
arr = [9,3,9,3,9,7,9]
  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9

*/

/*
the standard and most efficient way to solve this problem for integers is to apply the bitwise XOR (^) operator. 
Since a ^ a === 0 for all integers, 
simply XORing all the numbers in the array will find the number that appeared an odd amount of times.
*/

// source:::  https://stackoverflow.com/questions/62644055/find-unpaired-element-in-array-how-does-this-work

const arr = [9, 2, 4, 6, 4, 2, 9, 6, 8, 11]

// keyboard shortcut -  alt 94  = ^
// XOR (^) 
// a ^ a === 0 
const solution = arr.reduce((acc, curr) => acc ^ curr, 0)



// console.log('solution 2 :::->>>', solution2);

const solution3 = (arr) => {
    let res;
    const unique = [...new Set(arr)]
    unique.map(N => {
        const filtered = arr.filter(num => num == N)
        if (filtered.length == 1) {
            res = filtered[0]
        }
    })
    return res
}

console.log('solution3   :::->>>', solution3(arr));

