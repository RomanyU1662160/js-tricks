/*
find the greatest common divider of two numbers 

Example: 4,6 =2
Example: 2,3 =1
*/

const isPrime = (N) => {
    if (N < 2) return false
    let init = 2;
    while (init < N) {
        if (N % init == 0) {
            return true
        }
        init++
    }


}

console.log('isPrime  :::->>>', isPrime(10));

const solution = (num1, num2) => {
    const min = Math.min(num1, num2);
    const max = min === num1 ? num2 : num1
    if (max % min === 0) {
        return min
    }
    console.log('min  :::->>>', min);
    console.log('max  :::->>>', max);
    // while (num1 < num2) {
    //     console.log('num1  :::->>>', num1);
    //     if (isPrime(num1)) { console.log(num1) }
    //     num1++
    // }




}

const res = solution(4, 64)
console.log('res  :::->>>', res);