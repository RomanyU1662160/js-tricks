// map an array of objects to an object

const users = [
    { id: 123, name: "dave", age: 23 },
    { id: 456, name: "chris", age: 23 },
    { id: 789, name: "bob", age: 23 },
    { id: 101, name: "tom", age: 23 },
    { id: 102, name: "tim", age: 23 }
]


const mapToObject = (arr, keyToUse) => {
    return arr.reduce((obj, item) => {
        obj[item[keyToUse]] = item;
        return obj
    }, {})
}

const solution = mapToObject(users, "id")

console.log('solution  :::->>>', solution);

// 
const solution2 = { ...users }
console.log('solution2  :::->>>', solution2);
const res1 = sum(10, 20);

const res2 = diff(10, 20);

function sum(x, y) {
    return x + y
}

function diff(x, y) {
    return x - y
}

console.log('res1  :::->>>', res1);
console.log('res2  :::->>>', res2);


