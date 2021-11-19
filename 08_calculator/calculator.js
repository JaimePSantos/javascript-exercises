const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const reducerSum = (previousValue,currentValue) => previousValue + currentValue;

const sum = (arr) => arr.reduce(reducerSum,0);

const reducerMult = (previousValue,currentValue)=>previousValue * currentValue;

const multiply = (arr) => arr.reduce(reducerMult);

const power = (base,pwr) => base**pwr;

const factorial = (n) =>(n==0||n==1)? 1 : (n * factorial(n-1))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};