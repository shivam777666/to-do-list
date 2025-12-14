function addtask() {
    const input = document.getElementById('inputTask');
    const taskText = input.value.trim();
    if (taskText === "") return; 

    const newtask = document.createElement('li');
    newtask.textContent = taskText + " "; 

    const tasklist = document.getElementById('tasklist');
    tasklist.appendChild(newtask);

    input.value = "";

    deletetask(newtask);
}

function deletetask(newtask) {
    const deletebtn = document.createElement('button');
    deletebtn.textContent = "delete";

    deletebtn.onclick = function () {
        newtask.remove();
    };

    
    newtask.appendChild(deletebtn);
}
