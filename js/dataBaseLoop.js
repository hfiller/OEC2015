var dataObject = document.getElementById('trainData');
dataObject.addEventListener('change', fileReader, false);
function fileReader(){
	if (!window.FileReader) {
        alert('Your browser is not supported');
        return false;
    }
    // Create a reader object
    var reader = new FileReader();
    if (dataObject.files.length) {
        var textFile = dataObject.files[0];
        // Read the file
        reader.readAsText(textFile);
        // When it's loaded, process it
        $(reader).on('load', processFile);
    } else {
        alert('Please upload a file before continuing')
    } 
}

function processFile(e) {
    var file = e.target.result,
        results;
    if (file && file.length) {
        results = file.split("\n");
       	for(var i=1; i< results.length; i++){
       		//DATA Object Construction
       		var tmp = results[i].split('	');
       		if(typeof data[tmp[0]] == 'undefined'){
       			data[tmp[0]] = {};
       		}
       		data[tmp[0]][tmp[2]] = {};
       		data[tmp[0]][tmp[2]]['Train'] = tmp[1];
       		data[tmp[0]][tmp[2]]['RearLoc'] = tmp[3];
       		data[tmp[0]][tmp[2]]['Track'] = tmp[4];
       		data[tmp[0]][tmp[2]]['Speed'] = tmp[5];
       		data[tmp[0]][tmp[2]]['Status'] = tmp[6];
       	}
       	console.log('done');
    }
    delete results;
   	delete file;
   	setInterval(dataLoop,500)
}

function dataLoop(){
	var localData = data[currentTime++];
	//DO STUFF
	console.log(localData);
	delete localData;
}