/*
Hoisting in JS means uplift the variable prior to execution
https://www.youtube.com/watch?v=7tGmS2SPxBo
*/

console.log('Z  :::->>>', Z);  // will through an error  because No Z in the scope 



/*
    if  wee added var Z
 it will not through an error, it will return undefined, because var will define a global variable and save it in the memory
hoisting is uplifting this scope, so
*/

//* uncomment to test */
//var Z = 2

//console.log('Z  :::->>>', Z);
/*
   if  wee added le Z  ,
it will through an error, Cannot access 'z' before initialization
hoisting is uplifting this scope, so
*/
//* uncomment to test */
//let Z = 2



