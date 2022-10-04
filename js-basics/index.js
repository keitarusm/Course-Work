let a = 'red';
let b = 'blue';

console.log(a);
console.log(b);

[a, b] = swap(a, b);
console.log(a);
console.log(b);

function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}