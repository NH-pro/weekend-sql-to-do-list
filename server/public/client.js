$(document).ready(readyHandlers);

function readyHandlers() {
    console.log(`--- In readyHandlers function ---`);
    // connection test

    $('#add_task_btn').on('click', addTask);
    // event listener when the 'add_task_btn' is clicked, run 'addTask' function

    $('#task_display_container').on('click', '.delete_btn', deleteTask)

    getTasks();
}

function addTask() {
    console.log(`--- In addTask function ---`);
    // connection test

    let taskInput = $('#task_input').val();

    $.ajax({
        method: 'PUT',
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
            $('#task_display_container').append(`
            <tr>
                <td>${item.task}</td>
                <td>${item.completed}</td>
                <td>
                    <button class= "delete_btn">Delete</button>
                </td>
                <td>
                    <button class= "complete_btn">Complete</button>
                </td>
            </tr>
            `);
        };
    })
    .catch((err) => {
        console.log(`getTasks function Failed!`, err);
    })
}

function deleteTask() {
    console.log(`--- In deleteTask funciton ---`);
    // connnection test
}