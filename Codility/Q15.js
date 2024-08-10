
const arr = [0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]

const solution = (A) => {
    // find leaves
    // find the distance between leaves
    // find the max distance
    // return the max distance

    let leaves = [];
    arr.map((key, index) => {
        if (key === 1) {
            console.log('arr.indexOf(L) ::::>>>', arr.indexOf(key))
            leaves.push(index)
        }
    })
    const feb = (n) => {
        if (n < 1)
            return 0;
        if (n <= 2)
            return 1;
        return feb(n - 1) + feb(n - 2);
    }
    for (let i = 0; i < leaves.length; i++) {
        console.log('feb(i) ::::>>>', feb(leaves[i]))
    }


}

const result = solution(arr)
console.log('result ::::>>>', result)