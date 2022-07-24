// lexical scope is the ability for a child function to access the variables in it's  parent function (variable in a parent fun is accessible in a child fun)


// closure is function returned from a parent function and has access to parent local scope even after it executed

const gloVar = 1  // global var accessible in child

function counter() {
    const init = 0   //var in parent function 
    function addOne() {
        console.log('init  :::->>>', init);
        console.log('gloVar  :::->>>', gloVar);
    }

    return addOne
}

const result = counter(); // counter executed and no mor init var 
result()    //result still got access to init var after execution 




