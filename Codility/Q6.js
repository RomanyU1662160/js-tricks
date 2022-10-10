
// find that missing element in a Zero indexed array 

/*
given a zero-indexed array A, returns the value of the missing element.
For example, given array A such that:
  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.
*/


const arr = [1, 2, 3, 5]   // 4


// best solution 
const solution = (arr) => {
    if (arr.length == 1) { return arr[0] }
    let res;
    const sorted = arr.sort((a, b) => a > b ? 0 : -1)
    sorted.some(num => {
        const isExist = sorted.includes(num + 1)
        if (!isExist) res = num + 1
        return !isExist
    })
    return res
}

const solution2 = (arr) => {
    if (arr.length == 1) { return arr[0] }
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    console.log('max  :::->>>', max);
    console.log('min  :::->>>', min);
    let res;
    let init = min
    while (init < max) {
        const isExist = arr.includes(init + 1)
        if (!isExist) {
            res = init + 1;
            break
        }
        init++
    }
    return res
}




const res = solution(arr)
const res2 = solution2(arr)
console.log('res  :::->>>', res);
console.log('res2  :::->>>', res2);