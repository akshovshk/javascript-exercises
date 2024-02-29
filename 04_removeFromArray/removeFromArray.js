const removeFromArray = function(myArray) {
    for (let i = 0; i < arguments[1].length ; i++) {
        if (myArray[i] === typeof(myArray.arg[i+1])) {
            myArray.splice(i , 1);
        } else {
            continue;
        }
    }
    return myArray;

};

// Do not edit below this line
module.exports = removeFromArray;
