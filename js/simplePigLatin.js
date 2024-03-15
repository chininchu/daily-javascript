"use strict";

/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.*/


function pigIt(str) {


    let words = str.split(" ");

    return words.map(word => {
        // Check if the word is actually a word (and not punctuation) using regex
        if (word.match(/[A-Za-z]/)) {
            // Move the first character to the end and add 'ay'
            return word.substring(1) + word.charAt(0) + 'ay';
        } else {
            // If it's punctuation, return it unchanged
            return word;
        }
    }).join(" "); // Join the transformed words back into a string


}


console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !