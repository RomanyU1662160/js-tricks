/*
distinct value
*/
const arr = [2, 1, 1, 2, 3, 1, 4, 4]

function solution(A) {
    return new Set(A).size
}

const res = solution(arr)
console.log('res  :::->>>', res);