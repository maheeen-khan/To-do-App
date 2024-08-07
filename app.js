function addTask(){
    // console.log(document.getElementById('todo').value);

    var task = document.createElement('div');
    task.setAttribute('id','list');
    task.setAttribute('class','d-flex');
    task.className += ' justify-content-between';
    task.className += ' row';

    var task2 = document.createElement('div');
    task2.className += ' col-6';

    console.log(task);
    
    task.style.backgroundColor = 'white';
    task.style.borderRadius = '6px';
    task.style.paddingTop = '6px';
    task.style.paddingLeft = '12px';
    task.style.paddingBottom = '1px';
    task.style.marginBottom = '11px';
    task.style.textAlign = 'left';
    task2.innerHTML = `${todo.value}`;

    // document.getElementById("tasks").appendChild(task);


    //adding status
    var status = document.createElement('p');
    status.innerHTML = `pending`;
    status.style.fontSize = '11px';
    status.style.color = 'red';

    task2.appendChild(status);  // Append the status to the task div

    var task3 = document.createElement('div');
    task3.className += 'col-6';
    task3.innerHTML = `<input type="checkbox" name="finished" id="finished">`;

    task.appendChild(task2);
    task.appendChild(task3);

    // Append the task div to the tasks container(at html)
    document.getElementById("tasks").appendChild(task);

    todo.value = "";

}


function enter(event){
    if(event.keyCode === 13){
        addTask();
    }
}