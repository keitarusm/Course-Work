// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input

console.log(fizzBuzz(15));

function fizzBuzz(n) {
    let output = "";
    if (n % 3 === 0) output += "Fizz";
    if (n % 5 === 0) output += "Buzz";
    return (output === "") ? n : output;
}