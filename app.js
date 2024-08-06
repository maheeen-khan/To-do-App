function addTask(){
    // console.log(document.getElementById('todo').value);

    var task = document.createElement('div');
    
    task.innerHTML = `${todo.value}`;

    document.getElementById("tasks").appendChild(task);
}