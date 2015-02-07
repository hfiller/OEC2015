function blueZone(speed) {
    return -0.35*speed + 100;
}

function redZone(speed) {
    if (speed >= 51) {
        return 1.4*speed + 50;
    } else if (speed >= 31) {
        return 1.25*speed + 50;
    } else {
        return 1.1*speed+50;
    }
 }

 function yellowZone(speed) {
    if (speed >= 31) {
        return 2*redZone(speed) - 0.5*speed;
    } else {
        return 2*redZone(speed) - 0.4*speed
    }
 }


var data = {};
var currentTime = 0;