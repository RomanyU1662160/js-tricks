/*
MinPerimeterRectangle https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/min_perimeter_rectangle/
*/

const solution = (N) => {
    let I = 1;
    let res = 0;

    while (I * I < N) {
        console.log('I ::::>>>', I)
        if (N % I === 0) {
            const perimeter = 2 * (I + N / I)
            res = Math.min(res, perimeter)
        }
        I++
    }
    return res

}

//console.log(solution(30));


const solution2 = (N) => {
    let I = Math.floor(Math.sqrt(N));
    console.log('ath.sqrt(N) ::::>>>', Math.sqrt(N))
    console.log('I ::::>>>', I)
    while (I > 0) {
        if (N % I === 0) {
            return 2 * (I + N / I)
        }
        I--
    }

}

console.log(solution2(30));