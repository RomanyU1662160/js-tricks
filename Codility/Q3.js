/*
given an arry of integer, return indices of the two numbers such as they add up to a specific target 

example arr = [2,7,10,18]  target = 9
because 2+7 = 9 
answer [0,1]
*/


const exampleArr = [5, 1, 3, 7, 8, 10]
target = 15



const solution = (arr) => {
    let res = []
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        const subArray = arr.filter((N => N !== i))
        console.log('subArray  :::->>>', subArray);
        for (let T = 0; T < subArray.length; T++) {
            if (T + i == target) {
                return res = [...res, arr.indexOf(i), arr.indexOf(T)]
            }
        }


    }
    return [... new Set(res)]
}
const mySolution = solution(exampleArr)

console.log('mySolution  :::->>>', mySolution);