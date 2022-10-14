/*
findMaxProductOfThree
*/

const arr = [-3, 1, 2, -2, 5, 6];

function findMaxProductOfThree(arr) {
    let result;
    for (let i = 0; i < arr.length; i++) {
        const first = arr[i];
        const second = arr[i + 1];
        const third = arr[i + 2];
        console.log('first,second,third ::::>>>', first + "|" + second + "|" + third)

        if (first > second && first > third) {
            result = first * second * third
        }

        const product = first * second * third;
        console.log('product ::::>>>', product)
        if (product > result) {
            result = product;
            console.log('result ::::>>>', result)
        }
    }
    return result
}

const result = findMaxProductOfThree(arr)
console.log(result)
