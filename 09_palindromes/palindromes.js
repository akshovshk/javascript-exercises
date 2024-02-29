const palindromes = function (phrase) {
    let firstPhrase = phrase.toLowerCase().trim().replace(/[^a-z0-9]/g,'');
    let reversePhrase = '';
    for (let i = 1; i <= (firstPhrase.length + 1); i++) {
        reversePhrase += firstPhrase.substring(firstPhrase.length - i, firstPhrase.length - i + 1);
    }
    if(firstPhrase === reversePhrase) {
        return true;
    } else {
        return false;
    }


};

// Do not edit below this line
module.exports = palindromes;
