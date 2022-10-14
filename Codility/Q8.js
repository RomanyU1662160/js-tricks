// Permutation Check: Check whether array A is a permutation
// A permutation is a sequence containing each element from 1 to N once, and only once.



 const arr = [1,3,2,4,5,7]

function checkPermutation (arr){
    const n = arr.length
    const unique = [...new Set(arr)]
    if(unique.length != n) return false

    const maxEle = Math.max(...arr)
    console.log('unique.length ::::>>>', unique.length)
    if(maxEle != n) return false

    return true
}

const result = checkPermutation(arr)
console.log(result)