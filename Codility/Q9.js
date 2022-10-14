/*
proper nested string
*/


const solution = (S) => {
    const open = [];
    const close = [];
    const tags = ["(", "[", "{", "]", "}", ")"];

    for (i = 0; i < S.length; i++) {
        if (tags.includes(S[i])) {
            if (S[i] === "(" || S[i] === "[" || S[i] === "{") {
                console.log('str[i] ::::>>>', str[i])
                open.push(S[i]);
            } else {
                console.log('str[i] i close ::::>>>', str[i])
                close.push(S[i]);
            }
        }
        console.log('open ::::>>>', open)
        console.log('close ::::>>>', close)
    }
    return open.length === close.length;
}
const str = '{()[]}'
const result = solution2(str)
console.log(result)



// --------------------------------------------
// function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let stack = [];
//     let open = ['(', '[', '{'];
//     let close = [')', ']', '}'];
//     for (let i = 0; i < S.length; i++) {
//         if (open.indexOf(S[i]) > -1) {
//             stack.push(S[i]);
//         } else {
//             let index = close.indexOf(S[i]);
//             if (stack[stack.length - 1] === open[index]) {
//                 stack.pop();
//             } else {
//                 return 0;
//             }
//         }
//     }
//     if (stack.length === 0) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// const checkStringIsProperlyNested = (str) => {
//     const stack = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '(') {

//             stack.push(str[i]);
//         } else if (str[i] === ')') {

//             if (stack.length === 0) {
//                 return false;
//             }
//             stack.pop();
//         }
//     }
//     return stack.length === 0;
// };


