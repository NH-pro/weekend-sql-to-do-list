$(document).ready(readyHandlers);

function readyHandlers() {
    console.log(`--- In readyHandlers function ---`);
    // connection test

    $('#add_task_btn').on('click', addTask);
    // event listener when the 'add_task_btn' is clicked, run 'addTask' function

    $('#task_display_container').on('click', '.delete_btn', deleteTask);

    $('#task_display_container').on('click','.complete_btn', completeTask);

    getTasks();
    // get tasks from DB and display them when page loads.
}

function completeTask() {
    console.log(`--- In completeTask function ---`);
    // connection test

    let completeStatus = $(this).parents('tr').children('.compStatus').text();
    let taskId = $(this).parents('tr').data('task-id');
    let newStatus;

    if(completeStatus === 'N') {
        newStatus = {
            newStatus: 'Y',
            taskId: taskId
        };
        alert('🎉 Nice Job! Keep up the great work! 👏');
    }
    else {
        newStatus = {
            newStatus: 'N',
            taskId: taskId
        };
    };

    $.ajax({
        method: 'PUT',
        url: '/tasks',
        data: newStatus
    })
    .then(() => {
        console.log(`completeTask function Success!`);
        getTasks();
        //display new DB data on DOM
    })
    .catch((err) => {
        console.log(`completeTask function Failed!`, err);
    });
};

function addTask() {
    console.log(`--- In addTask function ---`);
    // connection test

    let taskInput = {
        name:$('#task_input').val()
    };

    if(taskInput.name == '') {
        alert(`❌ Task cannot be nothing. Try again. ❌`)
    }
    else {
        $.ajax({
            method: 'POST',
            url: '/tasks',
            data: taskInput
        })
        .then(() => {
            console.log(`addTask Success!`);
            getTasks();
            //display new DB data on DOM
            $('#task_input').val('');
            // empty 'task_input
        })
        .catch((err) => {
            console.log(`addTask Failed!`, err);
        });
    };
};


function deleteTask() {
    console.log(`--- In deleteTask funciton ---`);
    // connnection test

    let deleteId = {deleteId: $(this).parents('tr').data('task-id')};
    // this targets the id number that was declared in 'getTasks' function.

    $.ajax({
        method: 'DELETE',
        url: '/tasks',
        data: deleteId
    })
    .then(() => {
        console.log(`deleteTask function success!`);
        getTasks();
        // display new DB data on DOM
    })
    .catch((err) => {
        console.log(`deleteTask function Failed!`, err);
    });

}

function getTasks() {
    console.log(`--- In getTasks function ---`);
    //connection test

    $('#task_display_container').empty();
    // Clear old DB data on DOM

    $.ajax({
        method: 'GET',
        url: '/tasks'
    })
    .then((response) => {
        console.log(`getTasks function Success!`, response);
        for(let item of response) {
            if(item.completed === 'Y') {
                newClass = 'class = "green"';
            }
            else {
                newClass = 'class = "white"';
            }
            $('#task_display_container').append(`
            <tr ${newClass} data-task-id="${item.id}">
                <td>${item.task}</td>
                <td class="compStatus">${item.completed}</td>
                <td>
                    <button class= "complete_btn">Completed</button>
                </td>
                <td>
                    <button class= "delete_btn">Delete</button>
                </td>
            </tr>
            `);
        };
    })
    .catch((err) => {
        console.log(`getTasks function Failed!`, err);
    });
}
