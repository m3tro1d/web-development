function isPrimeNumber(n) {
  if (typeof n === 'number') {
    isSinglePrime(n);
  } else if (Array.isArray(n)) {
    n.map(element => {
      if (typeof element === 'number') isSinglePrime(element);
      else console.error(`'${element}' is not a number`);
    });
  } else {
    console.error(`'${n}' is not a number neither an array`);
  }

  function isSinglePrime(x) {
    let isPrime = true;
    for (let i = 2; i * i < x; i++) {
      if (x % i === 0) {
        isPrime = false;
        break;
      }
    }
    // Sanity checks
    if (x <= 1 || Math.floor(x) !== x) {
      isPrime = false;
    }
    if (isPrime) {
      console.log(x + ' is a prime number');
    } else {
      console.log(x + ' is not a prime number');
    }
  }
}


// Standalone numbers test
console.log('========== NUMBERS ==========');
isPrimeNumber(12);
isPrimeNumber(13);

// Array test
console.log('========== ARRAY ==========');
let testArray = [...Array(100).keys()].map(i => ++i);
isPrimeNumber(testArray);

// Invalid argument type test
console.log('========== INVALID ==========');
isPrimeNumber('hello');
testArray = [1, 2, 'I\'m an error!', 13];
isPrimeNumber(testArray);
isPrimeNumber(13.37);
isPrimeNumber(-322);
