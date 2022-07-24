// link "https://kentcdodds.com/blog/listify-a-java-script-array"

// List an array with format to the user using Intl.ListFormat

// Use Intl.ListFormat

let fruits = ['Apple', 'Mango', 'Orange', 'Banana', 'Pineapple'];

let formatOptions1 = {
  style: 'long',
  type: 'conjunction',
};
let formatOptions2 = {
  style: 'short',
  type: 'conjunction',
};
let formatOptions3 = {
  style: 'long',
  type: 'disjunction',
};
let formatOptions4 = {
  style: 'narrow',
  type: 'conjunction',
};

const myFormat1 = new Intl.ListFormat('en', formatOptions1); //Apple, Mango, Orange, Banana, and Pineapple
const myFormat2 = new Intl.ListFormat('en', formatOptions2); //Apple, Mango, Orange, Banana, & Pineapple
const myFormat3 = new Intl.ListFormat('en', formatOptions3); //Apple, Mango, Orange, Banana, or Pineapple
const myFormat4 = new Intl.ListFormat('en', formatOptions4); //Apple, Mango, Orange, Banana,Pineapple

let formatted1 = myFormat1.format(fruits);
let formatted2 = myFormat2.format(fruits);
let formatted3 = myFormat3.format(fruits);

console.log(formatted1);
console.log(formatted2);
console.log(formatted3);
