const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, number) => sum + number, 0);
};

const multiply = function(array) {
  return array.reduce((mul, number) => mul * number, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(number) {
	if (number === 0) return 1;
  let result = number * factorial(number - 1);

  return result;
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
