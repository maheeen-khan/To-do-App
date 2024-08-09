function taskChecked(checkbox) {
    // Get the corresponding status element
    var statusElement = checkbox.closest('.row').querySelector('.stat');

    if (checkbox.checked === true) {
        console.log("Task done");
        statusElement.innerHTML = 'Task done';
    } else {
        statusElement.innerHTML = 'pending';
    }
}

function addTask(){
    // console.log(document.getElementById('todo').value);

    var task = document.createElement('div');
    task.setAttribute('id','list');
  
    var cont = document.createElement('div');
    cont.classList.add('row');

    task.classList.add('d-flex','flex-column', 'container', 'justify-content-between'); 
  

    var task2 = document.createElement('div');
    task2.classList.add('col-lg-6', 'col-md-6', 'col-sm-6', 'bg-info');

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
    status.classList.add('stat');
    status.style.fontSize = '11px';
    status.style.color = 'red';

    task2.appendChild(status);  // Append the status to the task div

    var task3 = document.createElement('div');
    task3.classList.add('col-lg-6','col-md-6' ,'col-sm-6','bg-success','checkbox');
    // task3.setAttribute('style', 'accent-color:pink !important');
    // task3.setAttribute('style', 'text-align:right !important');
    task3.innerHTML = `<img src="./images/dlt-removebg-preview.png" alt="delete" id="dlt">  <input type="checkbox" name="finished" id="finished" onclick="taskChecked(this)">`;

    cont.appendChild(task2);
    cont.appendChild(task3);

    task.appendChild(cont);


    // Append the task div to the tasks container(at html)
    document.getElementById("tasks").appendChild(task);

    todo.value = "";

}


function enter(event){
    if(event.keyCode === 13){
        addTask();
    }
}