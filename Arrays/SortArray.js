// https://www.javascripttutorial.net/javascript-array-sort/#:~:text=The%20sort()%20method%20allows,first%20and%20largest%20value%20last.


// The sort() method casts elements to strings and compares the strings to determine the orders
const names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
const sorted = names.sort();
console.log(sorted);  //[ 'Bob', 'Jane', 'John', 'Mark', 'Mary' ]


// Wrong way to sort arrays of numbers
const numbers1 = [4, 2, 1, 3, 10, 5, 6, 7, 8, 9];
const wrongSortedNumbers1 = numbers1.sort();
console.log("wrongSortedNumbers1:;>>", wrongSortedNumbers1); //wrong sorted [1, 10, 2, 3, 4,5,  6, 7, 8, 9]


// The correct way to sort arrays of numbers
// The sort() method accepts an optional argument which is a function that compares two elements of the array.

const numbers = [4, 2, 1, 3];
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers); // [ 1, 2, 3, 4 ]


// sort strings
const animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];
const sortedAnimals = animals.sort((a, b) => a.localeCompare(b));

// sort arrays of objects by last name
const users = [
    { id: 1, firstName: 'John', lastName: 'Smith' },
    { id: 2, firstName: 'Jane', lastName: 'Doe' },
    { id: 3, firstName: 'Mary', lastName: 'Bob' },
    { id: 4, firstName: 'Mark', lastName: 'Smith' },
    { id: 5, firstName: 'Bob', lastName: 'Arnold' },
    { id: 6, firstName: 'Robert', lastName: 'Smith' },
    { id: 7, firstName: 'Robert', lastName: 'Doe' },
    { id: 8, firstName: 'Robert', lastName: 'Bob' },
    { id: 9, firstName: 'Abe', lastName: 'Arnold' },
    { id: 10, firstName: 'Robert', lastName: 'Abe' },
]



const sortedByLastName = users.sort((a, b) => { return a.lastName.localeCompare(b.lastName) })
console.log("sortedByLastName:::>>>", sortedByLastName);

const sortedByFirstName = users.sort((a, b) => a.firstName.localeCompare(b.firstName))
console.log("sortedByFirstName:::>>>", sortedByFirstName);



const sortedByLastNameAndFirstName = users.sort((a, b) => { return a.lastName.localeCompare(b.lastName) || a.firstName.localeCompare(b.firstName) })




const sortedByLastNameDescending = users.sort((a, b) => {
    if (a.lastName < b.lastName) return -1
    if (a.lastName > b.lastName) return 1

})
console.log("sortedByLastNameDescending:::>>>", sortedByLastNameDescending);
console.log("sortedByLastName:::>>>", sortedByLastName);
