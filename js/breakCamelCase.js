"use strict";

/*Complete the solution so that the function will break up camel casing, using a space between words.*/


const solution = (string) => {

    const splitArray = string.split("");

    let result = [];

    for (let i in splitArray) {

        if (splitArray[i] === splitArray[i].toUpperCase()) {


            result.push(splitArray[i] = " " + splitArray[i]);

        } else if (splitArray[i] === splitArray[i].toLowerCase()) {

            result.push(splitArray[i]);


        }


    }

    return result.join((""));


}


