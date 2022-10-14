/*
codility - countFactors of a number
*/

/*
logic:
- define two vars i and count 
- make a while loop to check if i * i is less than N
- if N % i is equal to 0, add 2 to count
- increment i
- if i * i is equal to N, add 1 to count
- return count
*/



function solution(N) {
    var i = 1;
    var count = 0;
    while (i * i < N) {
        if (N % i === 0) {
            count += 2;
        }
        console.log('count ::::>>>', count)
        i++;
        console.log('i++ ::::>>>', i)
    }
    console.log('i * i === N ::::>>>', i * i === N)
    if (i * i === N) {
        count++;
    }
    return count;
}

// const res = solution(19)
// console.log('res  :::->>>', res);



const solution2 = (N) => {
    let i = 1
    let factors = [];
    while (i * i < N) {
        if (N % i === 0) {
            factors.push(i)
            factors.push(N / i)
        }
        i++
    }
    if (i * i === N) {
        factors.push(i)
    }
    return factors.length


}

const res2 = solution2(25)
console.log('res2 ::::>>>', res2)

console.log('Math.sqrt(20) ::::>>>', Math.sqrt(50))