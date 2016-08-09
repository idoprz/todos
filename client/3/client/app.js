(function bootstrap() {
	jQuery.ajax("/api/todos", {
		success: function (res) {
			printTasks(res);
		},
		error: function (err) {
			console.error(err);
		}
	});
})();

function printTasks(tasks) {
	var tasksElem = document.getElementById("tasks");
	for (var i = 0; i < tasks.length; i++) {
		var node = document.createElement("LI");
		var textnode = document.createTextNode(tasks[i].name);		
		node.appendChild(textnode);
		tasksElem.appendChild(node);
	}
}

function onClick() {
	var value = document.getElementById("taskinput").value;
	if(value)
		jQuery.ajax({
			url: "/api/todos",
			type: "POST",
			data:
			{
				name: value,
				status: true
			},
			dataType: "json",
			success: function(data){
			//remove all tasks
			document.getElementById("tasks").innerHTML='';
			printTasks(data);
		},
		failure: function(errMsg) {
			console.error(err);
		}
	});
}