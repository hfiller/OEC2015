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

}

function stopTrain(){

}

function findTrain(){

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
