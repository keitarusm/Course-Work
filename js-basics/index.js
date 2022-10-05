showPrimes(20);

function showPrimes(limit) {
    if (limit < 1) return;
 
    for (var number = 2; number <= limit; number++)
        if (isPrime(number))
            console.log(number);
}

function isPrime(number) {
    for (var factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;
    return true;
}