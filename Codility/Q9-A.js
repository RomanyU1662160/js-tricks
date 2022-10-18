// cycling rotation

/*
shift an array by removing the last element and add it back to the first of the array at K times    
*/

// rotate array 3 times
const arr = [1, 23]
const arr2 = [0, 0, 0]
const K = 4

let init = 0



const solution = (arr) => {

    while (init < K) {
        const popped = arr.pop();
        console.log('arr after pop  :::->>>', arr);
        arr.unshift(popped)
        console.log('arr after unshift  :::->>>', arr);
        init++
        console.log('init counter  :::->>>', init);
    }
    return arr
}

const res = solution(arr)

console.log('res  :::->>>', res);