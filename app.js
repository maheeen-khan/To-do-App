function taskChecked(checkbox) {
    // Get the corresponding status element
    var statusElement = checkbox.closest('.row').querySelector('.stat');

    if (checkbox.checked === true) {
        console.log("Task done");
        statusElement.innerHTML = 'Task done';
        statusElement.style.color = 'green';
    } else {
        statusElement.innerHTML = 'pending';
        statusElement.style.color = 'red';
    }
}

function addTask(){
    // console.log(document.getElementById('todo').value);

    var task = document.createElement('div');
    task.setAttribute('id','list');
    // task.style.border = '2px solid black';



  
    var cont = document.createElement('div');
    cont.classList.add('row', 'color');

    var task2 = document.createElement('div');
    task2.classList.add('col-lg-7', 'col-md-6', 'col-sm-6');

    console.log(task);
    
    // task.style.backgroundColor = 'white';
    task.style.borderRadius = '6px';
    task.setAttribute('class','box');
    task.style.paddingTop = '6px';
    task.style.paddingLeft = '12px';
    task.style.paddingBottom = '1px';
    task.style.marginBottom = '11px';
    task.style.textAlign = 'left';
    task2.innerHTML = `<input type="text" name="below-inp" id="below-inp" value="${todo.value}" style="background: transparent;  border: none;" disabled> `;

    task.classList.add('d-flex','flex-column', 'container', 'justify-content-between', 'animate__animated','animate__zoomIn'); 

    // document.getElementById("tasks").appendChild(task);


    //adding status
    var status = document.createElement('p');
    status.innerHTML = `pending`;
    status.classList.add('stat');
    status.style.fontSize = '11px';
    status.style.color = 'red';

    task2.appendChild(status);  // Append the status to the task div

    var task3 = document.createElement('div');
    task3.classList.add('col','col-lg-5','col-md-6' ,'col-sm-6','checkbox');
    // task3.setAttribute('style', 'accent-color:pink !important');
    // task3.setAttribute('style', 'text-align:right !important');
    task3.innerHTML = `<img src="./images/edit-removebg-preview.png" alt="edit" id="edit" onclick="editTask(event)">  <img src="./images/dlt-removebg-preview.png" alt="delete" id="dlt" onclick="deleteTask(event)">  <input type="checkbox" name="finished" id="finished" onclick="taskChecked(this)">`;

    cont.appendChild(task2);
    cont.appendChild(task3);

    task.appendChild(cont);


    // Append the task div to the tasks container(at html)
    document.getElementById("tasks").appendChild(task);

    todo.value = "";

}

function deleteTask(event){
    event.target.parentNode.parentNode.parentNode.remove();
}


function editTask(event){
    event.target.parentNode.parentNode.childNodes[0].childNodes[0].disabled = false;
    event.target.parentNode.parentNode.childNodes[0].childNodes[0].focus();
    // console.log(event.target);
    event.target.src = "./images/tick-removebg-preview.png";
    event.target.setAttribute('onclick', 'ticked(event)');
}

function ticked(event){
    console.log(event.target);
    event.target.parentNode.parentNode.childNodes[0].childNodes[0].disabled = true;
    event.target.src = './images/edit-removebg-preview.png';
    event.target.setAttribute('onclick', 'editTask(event)');
    event.target.setAttribute('id', 'edit');

}
function enter(event){
    if(event.keyCode === 13){
        addTask();
    }
}