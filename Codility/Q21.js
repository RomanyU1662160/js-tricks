/*
Codility: CountSemiPrimes
*/

const isPrime = (num) => {
    if (num < 2) return false;
    let init = 2;
    while (init < num) {
        if (num % init === 0) {
            return false
        }
        init++
    }
}

const isSemiPrime = (num) => {
    if (num < 2) return false;
    let init = 2;
    let count = 0;
    while (init < num) {
        if (num % init === 0) {
            count++
        }
        init++
    }
    return count === 2
}



