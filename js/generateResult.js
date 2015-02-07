function saveData(data){
	var formBlob = new Blob(data.toString(), { type: 'text/plain' });
	$('#result').href = window.URL.createObjectURL(formBlob);
	$('#result').click();
}