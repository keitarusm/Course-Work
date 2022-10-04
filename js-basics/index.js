// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

console.log(fizzBuzz(15));

function fizzBuzz(n) {
    if (typeof n !== 'number') return "Not a number";
    let output = "";
    if (n % 3 === 0) output += "Fizz";
    if (n % 5 === 0) output += "Buzz";
    return (output === "") ? n : output;
}