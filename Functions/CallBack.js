// call back is a function passed as an argument to another function to be executed after it

const fname = "romany";
const lname = "Sefen";

function getFullName(name1, name2, callback) {   //passed as argument
    const fullName = name1 + " " + name2
    return callback(fullName)  // callback function returned from a function
}

const toCaps = getFullName(fname, lname, (arg) => {
    console.log('arg  :::->>>', arg);
    return arg.toUpperCase()
})


console.log('toCaps  :::->>>', toCaps);


// Promise version of call back 


function makeFullName(name1, name2) {
    return name1 + " " + name2
}

function makeCapital(arg) {
    return arg.toUpperCase()
}


// Replace Callback with a promise 

function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(' Reading user from DB  :::->>>');
            resolve({ fname: "roma", lname: "Sefen" })
        }, 2000)
    })
}

console.log('before  :::->>>');

const user = getUser(1);
user.then(D => console.log('user  :::->>>', D))

console.log('after  :::->>>');