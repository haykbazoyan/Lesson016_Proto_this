// Create functions for the Calculator class that can do the following:
/*
function Calculator(a, b) {
  this.add = (a, b) => {
    return a + b;
  };
  this.subtract = (a, b) => {
    return a - b;
  };
  this.multiply = (a, b) => {
    return a * b;
  };
  this.divide = (a, b) => {
    return a / b;
  };
}

const calculator = new Calculator();
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));
*/

class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}

const calculator = new Calculator();
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));
