const arr = [{ fruit1: "apple" }, { fruit2: "mango" }, { fruit3: "orange" }]
const nums = [1, 2, 3, 4, 5, 6]

// solution 1   simple and best
const myObj = Object.assign({}, ...arr);
const myObj2 = Object.assign({}, nums)
// console.log('myObj  :::->>>', myObj);
// console.log('myObj2  :::->>>', myObj2);

// ------------------------------------------------------------------------------------------------------------

// solution2
const myObjWithReducer = {}
arr.reduce((acc, curr) => {
    return Object.assign(myObjWithReducer, curr)
}, 0)

// console.log('WithReducer  :::->>>', myObjWithReducer);

// ------------------------------------------------------------------------------------------------------------

// solution3 
const myObjWithDestructure = { ...arr }

// console.log('WithDestructure  :::->>>', myObjWithDestructure);

// ------------------------------------------------------------------------------------------------------------

const arr2 = [[{ fruit1: "apple" }], [{ fruit2: "mango" }], [{ fruit3: "orange" }]]
let useReducerObj = {}
arr2.reduce((acc, curr) => {
    console.log('curr  :::->>>', curr);
    return Object.assign(useReducerObj, ...curr)
}, 0)



console.log('useReducerObj  :::->>>', useReducerObj);