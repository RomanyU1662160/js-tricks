//  Lexical scope is the ability for a child function to access the variables in it's  parent function (variable in a parent fun is accessible in a child fun)

// closure is function returned from a parent function and has access to parent local scope even after it executed

const gloVar = 1; // global var accessible in child

function counter() {
  //var in parent function
  return function addOne(param) {
    // access to parent var passed when called (line 18)
    console.log("init  :::->>>", param); //0
    console.log("gloVar  :::->>>", gloVar); //1
  };

  return addOne;
}

const result = counter(); // counter executed and no mor init var
result(5); //result still got access to init var after execution

/*
This is a common question in JS interview
https://www.youtube.com/watch?v=-xqJo5VRP4A&t=890s
*/
// closure get LogI have access to i ,
// if we use var, i will be a global variable and its value will be override to be 3 ,  closure will will get its global value
// if we use let , i will be scoped in the loop not to to global and  it is value will be incremented  0,1,2

for (var i = 0; i < 3; i++) {
  const logI = () => {
    console.log("i  :::->>>", i);
  };
  const anInterval = setTimeout(logI, 1000);
}
console.log("after the loop  :::->>>");

console.log("Z ", z);

var z = "2";
