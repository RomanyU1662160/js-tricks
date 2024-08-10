// write a function to return fibonacci value for a given number
// fibonacci example [0, 1, 1, 2, 3, 5, 8, 13, 21, ...]


const getFibonacci = (N) => {
    let num1 = 0, num2 = 1, sum = num1 + num2
    let result = [num1]
    while (num1 <= N) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum
        result.push(num1)
    }
    return result
}



const res = getFibonacci(8)

console.log('res  :::->>>', res);

//  node Arrays/fibonacci.js