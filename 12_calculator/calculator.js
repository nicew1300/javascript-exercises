const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function() {
	add()
};

const multiply = function(a, b) {
  return a * b
};

const power = function(a, b) {
	return a ** b
};

const factorial = function() {
  let result = 1;
  for (let i = 1; i <= arguments[0]; i++) {
    result *= i;
  }
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
