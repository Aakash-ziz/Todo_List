const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const tableBody = document.getElementById('taskTableBody');


let taskCount = 0;

function deleteTask(button) {
    const row = button.parentNode.parentNode; // Get the row of the button clicked
    row.parentNode.removeChild(row); // Remove the row from the table
}

form.addEventListener('submit',function(event) {
    event.preventDefault();

    const taskValue = input.value.trim();

    if(taskValue){
        taskCount++
        const newRow = document.createElement('tr');
        newRow.innerHTML= `
        <td>${taskCount}</td>
        <td>${taskValue}</td>
        <td><button onclick="deleteTask(this)">Delete</button></td>
        `
        tableBody.appendChild(newRow)

        input.value=' ';
    }else{
        alert('Please enter the task')
    }
    
})