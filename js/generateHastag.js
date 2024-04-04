"use strict";


/*The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.*/


function generateHashtag(str) {

    // Check if the input is empty


    // split the string

    const splitString = str.split(" ");

    let finalResult = ["#"];

    for (let i = 0; i < splitString.length; i++) {


        // At this point we will further split the string into individual characters and store it in the splitStr variable.

        const splitStr = splitString[i].split("");


        for (let j = 0; j < splitStr.length; j++) {


            if (j === 0) {


                finalResult += splitStr[j].charAt(0).toUpperCase();


            } else {

                finalResult += splitStr[j];

            }


        }


    }

    // Check if final result is more than 140 characters

    if (finalResult.length > 140) {

        return false


    }


    return finalResult;


}

