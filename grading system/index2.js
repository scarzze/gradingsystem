function checkSpeed(speed) {
if (speed < 70) {
console.log("Ok");
} else {
const excess = speed - 70;
let points = Math.floor(excess / 5);
    if (points > 12) {
      console.log("License suspended");
    } else {
      console.log("Points: " + points);
        }
    }
}
checkSpeed(80);
return 'take care boss';