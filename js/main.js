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
            saveDataString(behindTrain.Train + " STOP");
        } else {
            saveDataString(behindTrain.Train + " SLOW DOWN");
        }
    }
}

// Given a train location, returns the front of that block in meters
function frontOfBlock(blockNumber) {
    return 75 * blockNumber;
}

// Given a train location, returns the front of that block in meters
function backOfBlock(blockNumber) {
    return 75 * (blockNumber - 1);
}

var data = {};
var currentTime = 0;

function trains(data) {
  for(track in data){
    // Track is which track you are on
    // Need to keep track of 2 train objects at once so we can do collision checking, this variable holds the previous train 
      var lastTrain;
        // Trains are organized in ascending order by front location (signal block)
        for(FrtLoc in data[track]){
          // Create a train object 
          var train = {};
          train.Train = data[track][FrtLoc].Train;
          train.FrtLoc = FrtLoc;
          train.RearLoc = data[track][FrtLoc].RearLoc;
          train.track = track;
          train.Speed = data[track][FrtLoc].Speed;
          train.status = data[track][FrtLoc].Status;
          delete data[track][FrtLoc];

          //console.log(train);


          // send the two trains in a function, except for the first train in the array (we need more than one train)
          if(typeof lastTrain !== 'undefined'){
            checkCollision(lastTrain, train); 
          }
          lastTrain = train;
        }
  }
}