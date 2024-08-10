//https://www.youtube.com/watch?v=JP_kQ24PY_w    

const arr = [1, 2, 3, 4, 5, 8, 6]


// array.at is nan Es2022 feature to access elements  in an array

const lastElement = arr.at(-1)  // 6 last element 
const beforeLastElement = arr.at(-2)  // 8  the element before last element 

// find index of an element in an array
const res = arr.findIndex((I) => I == 5)
const indexOf = arr.indexOf(5)


console.log('res  :::->>>', res);
console.log('indexOf  :::->>>', indexOf);

console.log('lastElement  :::->>>', lastElement);
console.log('beforeLastElement  :::->>>', beforeLastElement);


// old solution 
const oldSolution = arr[(arr.length) - 1]
console.log('oldSolution  :::->>>', oldSolution);
