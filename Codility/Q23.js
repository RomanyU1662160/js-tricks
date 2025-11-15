// create a method tht take a string, trim "-" and "_" from it and convert it to camelCase word
// if the word starts with capital case, you must reserve the capital letter 
/*
example 
"The_first_warrior" -> TheFirstWarrior",
"the_first_warrior" -> theFirstWarrior",
"the-first-warrior" -> theFirstWarrior",
"The-first-warrior" -> TheFirstWarrior",
*/

const toCamelCase  = (input)=> {
    if(!input) return "";

    const cleanArray = input.split(/[_-]/);
    const [first, ...rest] = cleanArray

    const isCapital = first[0].toUppercase() === input[0];

    const capatilised = rest.map((word)=> {
        word[0].toUppercase()+word.slice(1)
    })
    return first+capatilised.join("")
}