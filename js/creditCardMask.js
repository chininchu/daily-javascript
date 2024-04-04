"use strict";


/*Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.*/


const maskify = (cc) => {


    const result = cc.split("").reduce((accum, currentValue, i, array) => {


        let differenceBetweenLength = (array.length - accum.length) <= 4 ? accum.push(currentValue) : accum.push("#");


        return accum;


    }, []);


    return result.join("");


}


console.log(maskify("1234567890"));


