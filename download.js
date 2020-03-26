var list = [];
var button = document.getElementsByClassName('btn btn-xs btn-default');
for(var i=0; i < button.length; i++){
	list.push(button[i].getAttribute('href'));
} 

if (list.length>0) {
	var firstRow = document.getElementById('bs-table').rows[0];

	var dlButton = firstRow.insertCell(-1);

	dlButton.innerHTML = "<a href='#' class='btn btn-sm btn-primary'><i class='fa fa-cloud-download'></i>&nbsp;Download All Files</a>";

	dlButton.onclick = function dlAll(){
		
		for(var i=0; i < list.length; i++){
			window.open('https://i-learn.uitm.edu.my' + list[i]);
		}
	}
}


