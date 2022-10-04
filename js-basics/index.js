// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended
console.log(checkSpeed(73));

function checkSpeed(speed) {
    const speedLimit = 70;
    if (speed < speedLimit + 5) return "Ok"
    else {
        speed -= speedLimit;
        let points = Math.floor(speed / 5)
        return points <= 12 ? ["Ok", points] : ["Suspended", points];
    }
}