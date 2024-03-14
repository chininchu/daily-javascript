"use strict";

/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.*/


function pigIt(str) {

    let splitStr = str.split("");


    // let firstLetter = "";


    let result = "";


    for (let i = 0; i < splitStr.length; i++) {


        if (i === 0) {

            // firstLetter.push(splitStr[i] + "ay");

            // result += splitStr[i] + "ay";

            result += splitStr[i + 1];


            i++;


        } else if (splitStr[i] !== " ") {

            result += splitStr[i];


        } else if (splitStr[i] === " ") {

            // firstLetter.push(splitStr[i + 1] + "ay");

            result += splitStr[i + 1] + "ay";
            i++


        }


    }


    return result;


}


console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !