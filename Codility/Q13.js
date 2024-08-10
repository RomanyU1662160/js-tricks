/*
Triangle Codility
*/
function solution(A) {
    A.sort((a, b) => a - b)
    let N = A.length
    for (let i = 0; i < N - 2; i++) {
        if (A[i] + A[i + 1] > A[i + 2]) {
            return 1
        }
    }
    return 0
}

const arr = [10, 2, 5, 1, 8, 20]
const res = solution(arr)
console.log('res  :::->>>', res);
