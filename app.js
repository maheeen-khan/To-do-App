function addTask(){
    // console.log(document.getElementById('todo').value);

    var task = document.createElement('div');
    
    task.style.backgroundColor = 'white';
    task.style.borderRadius = '6px';
    task.style.padding = '6px';
    task.style.paddingLeft = '12px';
    task.style.textAlign = 'left';
    task.innerHTML = `${todo.value}`;

    document.getElementById("tasks").appendChild(task);
}