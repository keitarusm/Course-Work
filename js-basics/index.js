let number1 = 5;
let number2 = 7;

let result = max(number1, number2);

console.log(result);

function max(number1, number2) {
    return number1 < number2 ? number2 : number1;
}