"use strict";


function generateHashtag(str) {
    // Trim the input and check if it's effectively empty
    if (!str.trim()) {
        return false;
    }

    // Capitalize the first letter of each word and join them
    const finalResult = '#' + str.split(' ')
        .filter(word => word !== '') // Filter out empty strings resulting from multiple spaces
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter
        .join('');

    // Check if the final result is longer than 140 chars or empty
    if (finalResult.length > 140 || finalResult === '#') {
        return false;
    }

    return finalResult;
}

