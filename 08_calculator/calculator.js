const add = function(a,b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	let initial = 0
  return array.reduce((total, element) => total + element,
  initial)
};

const multiply = function(array) {
  let initial = 1
  return array.reduce((total, element) => total * element,
  initial)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(f) {
	let total = 1;
    while (f > 1) {
        total *= f;
        f--;
    }
    return total;
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
