const nums = [1, 2, 5, 19, 8, 10, 12, 18, 6, 7]



const evenNums = nums.filter((num) => {
    return num % 2 == 0
})

console.log('evenNums  :::->>>', evenNums);