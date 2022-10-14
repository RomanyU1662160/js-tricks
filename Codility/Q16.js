/*
Codility ChocolatesByNumbers
*/

function solution(N, M) {
    // write your code in JavaScript (Node.js 8.9.4)
    const gcd = (a, b) => {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    }
    return N / gcd(N, M);
}

const result = solution(10, 4)
console.log('result ::::>>>', result)
