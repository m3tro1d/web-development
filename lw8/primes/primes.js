function isPrimeNumber(n) {
  if (typeof n === 'number') {
    isSinglePrime(n);
  } else if (Array.isArray(n)) {
    n.map(element => {
      if (typeof element === 'number') isSinglePrime(element);
      else console.error(`'${element}' is not a number`);
    });
  } else {
    console.error(`'${n}' is not a number, neither an array`);
  }

  function isSinglePrime(x) {
    let isPrime = true;

    // Sanity checks (natural numbers more than 1)
    if (!Number.isInteger(x) || x <= 1) {
      isPrime = false;
    }

    for (let i = 2; i * i <= x && isPrime; i++) {
      if (x % i === 0) isPrime = false;
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
isPrimeNumber(13.37);
isPrimeNumber(-322);

// Array test
console.log('========== ARRAY ==========');
isPrimeNumber([-1, 1.3, 2, 3, 4, 5, 16]);

// Invalid argument type test
console.log('========== INVALID ==========');
isPrimeNumber('hello');
isPrimeNumber([1, 2, 'I\'m an error!', 13, 14]);
