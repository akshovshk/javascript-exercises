const reverseString = function(getWord) {
    let wordLength = getWord.length;
    let reverseWord = '';
    for (let i = 0; i <= wordLength; i++) {
        reverseWord += getWord.substr(wordLength - i,1);
    }

    return reverseWord;

};

// Do not edit below this line
module.exports = reverseString;
