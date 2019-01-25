const IS_NOT_A_VALID_NUMBER = require('../constants/ErrorMessages').IS_NOT_A_VALID_NUMBER;

class BasicMathOperations {
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