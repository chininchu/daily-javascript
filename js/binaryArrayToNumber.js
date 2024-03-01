"use strict";


/*Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.*/

const binaryArrayToNumber = arr => {

    // Convert Array to a String

    let arraytoString = arr.join('');


    // Convert binary string to integer
    let integerValue = parseInt(arraytoString, 2);

    return integerValue;


};


console.log(binaryArrayToNumber([1, 0, 1, 0]));