// returns the size of the safe zone at the rear of a train
// speed in km/h, returns meters
function blueZone(speed) {
    return -0.35*speed + 100;
}

// returns the size of the danger zone at the front of a train
// speed in km/h, returns meters
function redZone(speed) {
    if (speed >= 51) {
        return 1.4*speed + 50;
    } else if (speed >= 31) {
        return 1.25*speed + 50;
    } else {
        return 1.1*speed+50;
    }
 }

// returns the size of the safe zone at the front of a train
// speed in km/h, returns meters
function yellowZone(speed) {
    if (speed >= 31) {
        return 2*redZone(speed) - 0.5*speed;
    } else {
        return 2*redZone(speed) - 0.4*speed
    }
}

// determines if two trains will collide
// requires first train (first parameter) is behind the location of second train (second parameter)
function checkCollision(behindTrain, aheadTrain) {
    // the tip of the safe zone of the behind train
    var behindTrainYellowZone = frontOfBlock(behindTrain.FrtLoc) + yellowZone(behindTrain.Speed);

    // the tip of the safe zone of the ahead train
    var aheadTrainBlueZone = backOfBlock(aheadTrain.RearLoc) - blueZone(aheadTrain.Speed);

    if (behindTrainYellowZone > aheadTrainBlueZone) { // collision with yellow zone
        var behindTrainRedZone = frontOfBlock(behindTrain.FrtLoc) + redZone(behindTrain.Speed);

        if (behindTrainRedZone > aheadTrainBlueZone) { // collision with red zone
            // store in file behindTrain.Train + " STOP"
            console.log("STOP");
        } else {
            // store in file behindTrain.Train + " SLOW DOWN"
            console.log("SLOW DOWN");
        }
    } else {
        console.log("no collision");
    }

}

// Given a train location, returns the front of that block in meters
function frontOfBlock(blockNumber) {
    return 75 * blockNumber;
}