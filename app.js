function addTask(){
    // console.log(document.getElementById('todo').value);

    var task = document.createElement('div');
    task.setAttribute('id','list');
    
    task.style.backgroundColor = 'white';
    task.style.borderRadius = '6px';
    task.style.paddingTop = '6px';
    task.style.paddingLeft = '12px';
    task.style.paddingBottom = '1px';
    task.style.marginBottom = '11px';
    task.style.textAlign = 'left';
    task.innerHTML = `${todo.value}`;

    // document.getElementById("tasks").appendChild(task);


    //adding status
    var status = document.createElement('p');
    status.innerHTML = `pending`;
    status.style.fontSize = '11px';
    status.style.color = 'red';

    task.appendChild(status);  // Append the status to the task div

    // Append the task div to the tasks container(at html)
    document.getElementById("tasks").appendChild(task);



}


function enter(event){
    if(event.keyCode === 13){
        addTask();
    }
}