const add = function(num1, num2) {
  return parseFloat(num1 + num2);
};

const subtract = function(num1, num2) {
  return parseFloat(num1 - num2);
	
};

const sum = function(array) {
  let sumAll = 0;
  for (let i = 0; i < array.length; i++) {
    sumAll = sumAll + array[i];
  }
  return parseFloat(sumAll);
};

const multiply = function(array) {
  let multAll = 1;
  for (let i = 0; i < array.length; i++) {
    multAll = multAll * array[i];
  }
  return parseFloat(multAll);

};

const power = function(num1, num2) {
	return parseFloat(num1 ** num2);
};

const factorial = function(num1) {
  let fact = 1
  if (num1 < 0) {
    return 'ERROR';
  } else if (num1 === 0 || num1 === 1) {
    return fact;
  } else {
      return (num1 * factorial(num1 - 1));
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
