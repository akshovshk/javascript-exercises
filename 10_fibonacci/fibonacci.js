const fibonacci = function(num) {
    let fibo = 1;
    let last = 1;
    if (parseInt(num) === 0) {
        return 0;
    } else if (parseInt(num) < 0) {
        return 'OOPS';
    } else {
        if (parseInt(num) === 1 || parseInt(num) === 2){
            return 1;
        } else {
            for (let i = 2; i < parseInt(num); i++) {
                fibo = last + fibo;
                last = fibo - last;
            }
            return fibo;
        }
    }

};

// Do not edit below this line
module.exports = fibonacci;
