"use strict";

/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.*/


function pigIt(str) {

    let splitStr = str.split("");
    splitStr.unshift(" ");

    console.log(splitStr[0]);

    for (let i = 0; i < splitStr.length; i++) {



    }


}


console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !