function calc(expr) {
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
      const parenStart = i;
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
    const operations = [
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
      if (isDigit(expr[i]) || expr[i] === '.') numberStr = expr[i] + numberStr;
      else if (isOperation(expr[i]) || expr[i] === ' ') break;
      else throw new Error(`Parsing error: unexpected token '${expr[i]}' at ${i}`);
    }
    if (expr[i] === '-') {
      numberStr = '-' + numberStr;
      i--;
    }
    let number = Number(numberStr);
    if (!isNaN(number)) return [Number(numberStr), i];
    throw new Error('Parsing error: invalid number occured');
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
assertEquals(calc('+ 3 4'), 7);
assertEquals(calc('+ 2 * 2 2'), 6);
assertEquals(calc('* 2 + 2 2'), 8);
assertEquals(calc('+ 2 / 8 * 2 2'), 4);

// More-than-one-digit numbers
assertEquals(calc('* 1234 56'), 69104);

// Floating point numbers
assertEquals(calc('+ 12.1 7.9'), 20);

// Negative numbers
assertEquals(calc('+ -12 3'), -9);

// Parentheses
assertEquals(calc('* (- 5 6) 7'), -7);
assertEquals(calc('* (+ 2 (* 4 (* 3 2))) (+ 3 5)'), 208);

// Too few arguments
assertNaN(calc('* 2 + 2'));

// Invalid symbols
assertNaN(calc('+ 2 d'));
assertNaN(calc('* 12 + 123hello12 7'));
assertNaN(calc('+ 12. 3'))
assertNaN(calc('+ 1..2 3'))
assertNaN(calc('+ 1.2.3 3'))

// Invalid parentheses
assertNaN(calc('+ 2 (- 3) 2)'));
assertNaN(calc('+ 2 (- 3( 2)'));

// Invalid type
assertNaN(calc(1337));

function assertEquals(actual, expected) {
  if (actual !== expected) throw new Error(`expected: ${expected} but was: ${actual}`);
}

function assertNaN(value) {
  if (!isNaN(value)) throw new Error(`expected: NaN but was: ${actual}`);
}
