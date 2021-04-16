function calc(expr) {
  // First check
  if (typeof expr !== 'string') {
    console.error(`Argument error: ${expr} is not a string`);
    return NaN;
  }

  let stack = [];
  let isFine = true;

  for (let i = expr.length - 1; i >= 0; i--) {
    if (expr[i] === ' ') continue;

    if (isDigit(expr[i])) {
      // Input the number
      let number, numberEnd;
      try {
        [number, numberEnd] = getNumber(expr, i);
      } catch (e) {
        console.error(e.message);
        isFine = false;
        break;
      }
      i = numberEnd;
      stack.push(number);

    } else if (expr[i] == ')') {
      // Recursively calculate the parenthesized expression
      let parenStart = i;
      try {
        i = getParenthesizedExprEnd(expr, i);
      } catch (e) {
        console.error(e.message);
        isFine = false;
        break;
      }
      stack.push(calc(expr.slice(i + 1, parenStart)));

    } else if (isOperation(expr[i])) {
      // Perform operations
      let operand1, operand2;
      if (stack.length >= 2) {
        operand1 = stack.pop();
        operand2 = stack.pop();
      } else {
        console.error(`Parsing error: too few arguments for '${expr[i]}' at ${i}`);
        isFine = false;
        break;
      }
      switch (expr[i]) {
        case '+':
          stack.push(operand1 + operand2);
          break;
        case '-':
          stack.push(operand1 - operand2);
          break;
        case '*':
          stack.push(operand1 * operand2);
          break;
        case '/':
          stack.push(operand1 / operand2);
          break;
      }
    } else {
      if (expr[i] === '(') console.error('Parsing error: parentheses do not match');
      else console.error(`Parsing error: unexpected token '${expr[i]}' at ${i}`);
      isFine = false;
      break;
    }
  }

  if (!isFine) return NaN;
  return stack.pop();


  // Utility functions
  function isDigit(c) {
    return c >= '0' && c <= '9';
  }

  function isOperation(c) {
    let operations = [
      '+',
      '-',
      '*',
      '/',
    ];
    return operations.includes(c);
  }

  function getNumber(expr, start) {
    let numberStr = '';
    let i;
    for (i = start; i >= 0; i--) {
      if (isDigit(expr[i])) numberStr = expr[i] + numberStr;
      else if (isOperation(expr[i]) || expr[i] === ' ') break;
      else throw new Error(`Parsing error: unexpected token '${expr[i]}' at ${i}`);
    }
    if (expr[i] === '-') {
      numberStr = '-' + numberStr;
      i--;
    }
    return [Number(numberStr), i];
  }

  function getParenthesizedExprEnd(expr, start) {
    let depth = 0;
    let i;
    for (i = start; i >= 0; i--) {
      if (expr[i] === ')') depth++;
      if (expr[i] === '(') depth--;
      if (depth === 0) break;
    }
    if (depth !== 0) throw new Error('Parsing error: parentheses do not match');
    return i;
  }
}


/**
 * Tests
 */
// Soft stuff
console.assert(calc('+ 3 4') === 7, `calc('+ 3 4') === 7 failed`);
console.assert(calc('+ 2 * 2 2') === 6, `calc('+ 2 * 2 2') === 6 failed`);
console.assert(calc('* 2 + 2 2') === 8, `calc('* 2 + 2 2') === 8 failed`);
console.assert(calc('+ 2 / 8 * 2 2') === 4, `calc('+ 2 / 8 * 2 2') === 4 failed`);

// Big and negative numbers
console.assert(calc('* 12 3') === 36, `calc('* 12 3') === 36 failed`);
console.assert(calc('* - 5 6 7') === -7, `calc('* - 5 6 7') === -7 failed`);

// Parentheses
console.assert(calc('* (+ 2 (* 4 6)) (+ 3 5)') === 208, `calc('* (+ 2 (* 4 6)) (+ 3 5)') === 208 failed`);

// Invalid symbols
console.assert(isNaN(calc('+ 2 d')), "isNaN(calc('+ 2 d')) failed");
console.assert(isNaN(calc('* 12 + 123hello12 7')), "isNaN(calc('* 12 + 123hello12 7')) failed");

// Invalid parentheses
console.assert(isNaN(calc('+ 2 (- 3) 2)')), `isNaN(calc('+ 2 (- 3) 2)')) failed`);
console.assert(isNaN(calc('+ 2 (- 3( 2)')), `isNaN(calc('+ 2 (- 3( 2)')) failed`);

// Invalid type
console.assert(isNaN(calc(1337)), `isNaN(calc(1337)) failed`);
