// convert an object to array 

let X = {
    a: 1,
    b: 2
}

// solution 1 
const arr = Object.entries(X).map(([key, value], index) => {
    return value
})

// solution 2 
const vals = Object.values(X)
console.log('arr  :::->>>', arr);
console.log('vals  :::->>>', vals);

