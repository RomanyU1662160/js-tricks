/**
 codility MinAbsSumOfTwo
 */

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a, b) => a - b);
    let min = Math.abs(A[0] + A[1]);
    let i = 0;
    let j = A.length - 1;
    while (i < j) {
        let sum = A[i] + A[j];
        if (Math.abs(sum) < min) {
            min = Math.abs(sum);
        }
        if (sum < 0) {
            i++;
        } else {
            j--;
        }
    }
    return min;
}

const arr = [1, 4, -3]
console.log(solution(arr))