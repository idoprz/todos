(function bootstrap() {
	var listOfTasks = ["Do something","Do something else","Do more stuff", "Do that again"];
	var tasksElem = document.getElementById("tasks");
	for (var i = 0 ; i < listOfTasks.length ; i++){
		var node = document.createElement("LI"); 
		var textnode = document.createTextNode(listOfTasks[i]);
		node.appendChild(textnode); 
		tasksElem.appendChild(node);
	}   			
})();

function onClick(){
	alert(document.getElementById("taskinput").value);
}