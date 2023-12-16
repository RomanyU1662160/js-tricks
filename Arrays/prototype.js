//  chain a function to an array to print values separated by comma
// example :: [1,2].print()


const arr = ["orange", "mango", "apple"]

const format = {
    style: "narrow",
    type: "conjunction"
}

Array.prototype.print = function () {
    return new Intl.ListFormat("en", { style: 'narrow', type: "conjunction" }).format(this)
}
Array.prototype.print2 = function () {
    return String(this)
}

const print1 = arr.print() // comma with spaces
const print2 = arr.print2()  // comma with no spaces

console.log(' print :::->>>', print1);   //orange, mango, apple
console.log(' print2 :::->>>', print2);  //orange,mango,apple


console.log(String(arr))