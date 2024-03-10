"use strict";

/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.*/


function pigIt(str) {

    let splitStr = str.split("");

    for (let i = 0; i < splitStr.length; i++) {

        for (let j = i + 1; j < splitStr.length; j++) {

            if (splitStr[j].trim().length === 0) {


            }


        }


    }


}


console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !