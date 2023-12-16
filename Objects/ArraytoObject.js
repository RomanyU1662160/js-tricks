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


// map an array oaf objects to object

const users = [
    { id: 123, name: "dave", age: 23 },
    { id: 456, name: "chris", age: 23 },
    { id: 789, name: "bob", age: 23 },
    { id: 101, name: "tom", age: 23 },
    { id: 102, name: "tim", age: 23 }
]

const mapArrayToObject = (arr) => {
    return arr.reduce((obj, item) => {
        obj[item.id] = item
        return obj
    }, {})
}

const arrayToObject = mapArrayToObject(users)
console.log('arrayToObject  :::->>>', arrayToObject);