
/*
Max Slice Sum :: http://straightdeveloper.com/codility-com-maxslicesum-task-javascript-solution-100/
*/
const arr = [3, 2, -6, 4, 0]

function solution(A) {
    var sum = 0
    var max = A[0]
    var maxCell = A[0]
    for (a of A) {
        console.log('a ::::>>>', a)
        sum = Math.max(0, sum + a)
        console.log('sum ::::>>>', sum)
        max = Math.max(max, sum)
        console.log('max ::::>>>', max)
        maxCell = Math.max(maxCell, a)
        console.log('maxCell ::::>>>', maxCell)
    }
    if (max == 0)
        return maxCell
    return max
}

const res = solution(arr)
console.log('res  :::->>>', res);