showNumbers(10);

function showNumbers(number) {
    if (typeof number !== 'number') return false;

    for (let i = 0; i <= number; i++) {
        console.log(i, (i%2===0?'EVEN':'ODD'));
    }
}