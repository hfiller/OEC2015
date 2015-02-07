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

function trains(data) {
  for(track in data){
    // Track is which track you are on
    // Need to keep track of 2 train objects at once so we can do collision checking, this variable holds the previous train 
      var lastTrain;
        // Trains are organized in ascending order by front location (signal block)
        for(FrtLoc in data[track]){
          // Create a train object 
          var train = {};
          train.train = data[track][FrtLoc].Train;
          train.FrtLoc = FrtLoc;
          train.RearLoc = data[track][FrtLoc].RearLoc;
          train.track = track;
          train.speed = data[track][FrtLoc].Speed;
          train.status = data[track][FrtLoc].Status;
          delete data[track][FrtLoc];

          console.log(train);


          // send the two trains in a function, except for the first train in the array (we need more than one train)
          if(typeof lastTrain !== 'undefined'){
            checkCollision(lastTrain, train); 
          }
          lastTrain = train;
        }
  }
}