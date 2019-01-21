const IS_NOT_A_VALID_NUMBER = require('../src/constants/ErrorMessages').IS_NOT_A_VALID_NUMBER;

class BasicMathOperations {
  static throwEver() {
    throw new Error('I fail ever!');
  }

  static sum(operands) {
    let total = 0;

    operands.forEach(val => {
      if(isNaN(val)) {
        throw new Error(IS_NOT_A_VALID_NUMBER(val));
      }

      total += val;  
    });

    return total;
  }
}

module.exports = BasicMathOperations;