const sumAll = function(firstNum, lastNum) {
    let sum = 0;
    if (firstNum < 0 || lastNum < 0 || !Number.isInteger(firstNum) || !Number.isInteger(lastNum)) {
        return "ERROR";
    }

    if (firstNum < lastNum) {
        for (; firstNum <= lastNum; firstNum++) {
            sum = sum + firstNum;
        }
    } else {
        for (; lastNum <= firstNum; lastNum++) {
            sum = sum + lastNum;
        }
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
