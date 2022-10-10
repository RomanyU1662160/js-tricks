/*
given an arry of integer, return indices of the two numbers such as they add up to a specific target 

example arr = [2,7,10,18]  target = 9
because 2+7 = 9 
answer [0,1]
*/


const exampleArr = [2, 5, 4, 6]
target = 9


const solution = (arr, target) => {
    let res = [];
    arr.map(element => {
        const subArray = exampleArr.filter(N => N != element)
        const founded = subArray.find(num => num + element == target)
        if (founded) {
            res = [arr.indexOf(founded), arr.indexOf(element)]
        }
    });
    return res
}


/*
Best and simple
*/

const solution2 = (arr, target) => {
    let res;
    arr.map((num, index) => {
        const neededValue = target - num
        arr.includes(neededValue) ? res = [arr.indexOf(neededValue), index] : []
    }
    )
    return res
}


const mySolution = solution(exampleArr, 9)
const mySolution2 = solution2(exampleArr, 9)

console.log('mySolution  :::->>>', mySolution);
console.log('mySolution 2 :::->>>', mySolution2);


const res1 = sum(10, 20);
console.log('diff  :::->>>', diff);
const res2 = diff(10, 20);
function sum(x, y) {
    return x + y
}

let diff = function (x, y) {
    return x - y
}

console.log('res1  :::->>>', res1);
console.log('res2  :::->>>', res2);