const repeatString = (getWord,getNum) => {
    let repeatedString = '';
    if (getNum < 0) {
        return 'ERROR'
    } else {
        for (let i = 0; i < getNum; i++) {
            repeatedString = getWord + repeatedString;
        }
        return repeatedString;
    }
};

// Do not edit below this line
module.exports = repeatString;
