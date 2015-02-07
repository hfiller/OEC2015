function fullscreen() {
	$('#trainData').click();
	if (container.requestFullscreen) {
		container.requestFullscreen();
	} else if (container.msRequestFullscreen) {
		container.msRequestFullscreen();
	} else if (container.mozRequestFullScreen) {
		container.mozRequestFullScreen();
	} else if (container.webkitRequestFullscreen) {
		container.webkitRequestFullscreen();
	}
	container.removeEventListener('click', fullscreen, false);
	buttonstuff();
	$(document).keyup(function(e) {

  		if (e.keyCode == 27) { saveDataEnd()}   // esc
});
}
var container = document.getElementById('container');
container.addEventListener('click', fullscreen, false);

function buttonstuff(){
	$('#slow').on('click', slowTrain);
	$('#stop').on('click', stopTrain);
	$('#trainlookup').on('click', findTrain);
	$('#zoomin').on('click', zoomIn);
	$('#zoomout').on('click', zoomOut);

	$("#trainlist").on('click', dropDown);
}

function slowTrain(){
	saveDataString($('#trayn').val()+" SLOW DOWN");
}

function stopTrain(){
	saveDataString($('#trayn').val()+" STOP");
}

function findTrain(){
	console.log(data[0]);
	var trainnames [];
	$.each(function (){
		if(!$.inArray(this.train,trainnames)){
			trainnames.push(this.train);
		}
	});
  for(var i = 0; i = trainnames.length; i++){
  	if($('#trainid').val() == trainnames[i]){
  		var str = '';
  		str += '';
  		$('#inject').html(str);
  	}
  }
}

function zoomIn(){

}

function zoomOut(){

}

function dropDown(){
	//array of dd items
	var options = [];
	$('#trainlist li').each(function(){
		options.push($(this).val());
	});

}
