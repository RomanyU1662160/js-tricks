// merge two arrays, remove duplicate and sort it 

const arr1 = [1, 2, 3, 8, 12, 4, 10, 6, 1, 9]
const arr2 = [8, 7, 6, 8, 5, 4, 9, 10, 3, 1, 2]

const arr3 = [... new Set([...arr1, ...arr2])].sort((a, b) => a > b ? 0 : -1)


console.log('arr3  :::->>>', arr3);