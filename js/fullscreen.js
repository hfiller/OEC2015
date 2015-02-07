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
}
var container = document.getElementById('container');
container.addEventListener('click', fullscreen, false);