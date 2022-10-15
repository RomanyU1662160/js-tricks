/*
Codility: CountNonDivisible
*/

/*
For each number A[i] such that 0 ≤ i < N, 
we want to count the number of elements of the array that are not the divisors of A[i]. 
We say that these elements are non-divisors
*/

const solution = (A) => {
    const length = A.length;
    let result = [];
    A.map(Num => {
        let count = 0;
        while (Num < length) {
            if (A[Num] >= 0 && A[Num] % A[Num + 1] != 0) {
                count++
            }
            Num++
        }
        result.push(count)
    })
    return result
}
const arr = [3, 1, 2, 3, 6]
console.log(solution(arr));

