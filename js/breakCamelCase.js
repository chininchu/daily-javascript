"use strict";

/*Complete the solution so that the function will break up camel casing, using a space between words.*/


const solution = (string) => {


    return string
        .split('')
        .map(char => char === char.toUpperCase() ? ` ${char}` : char)
        .join('');


}


console.log(solution("camelcase"));


