import { divByZero } from './errors';


class Calculator {
  foo() {
    this.bar = 'Hello World'; // OK, this is used
  }

  div(a, b) {
    this.result = a / b;
    if (this.result === Infinity) {
      throw divByZero;
    }
    return this.result;
  }
}


function calc(operator, x, y) {
  const sum = (a, b) => a + b;

  const sub = (a, b) => a - b;

  const mult = (a, b) => a * b;

  const div = (a, b) => {
    const result = a / b;
    if (result === Infinity) {
      throw divByZero;
    }
    return result;
  };

  let result = 0;

  switch (operator) {
    case 'sum':
      result = sum(x, y);
      break;
    case 'sub':
      result = sub(x, y);
      break;
    case 'mult':
      result = mult(x, y);
      break;
    case 'div':
      result = div(x, y);
      break;
    default:
      result = null;
  }

  return result;
}

function draws() { }

const badFn = () => {
  const result = 10 / 0;
  if (result === Infinity) {
    throw divByZero;
  }
  // throw divByZero;
};

module.exports = {
  calc,
  draws,
  badFn,
  Calculator,
};
