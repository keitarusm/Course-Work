const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    let grade = 0;

    for (let mark of marks)
        grade += mark;
    grade /= marks.length;

    switch (Math.floor(grade/10)) {
        case 10:
            return 'A';
            break;
        case 9:
            return 'A';
            break;
        case 8:
            return 'B';
            break;
        case 7:
            return 'C';
            break;
        case 6:
            return 'D';
            break;
        default:
            return 'F';
    }
}
