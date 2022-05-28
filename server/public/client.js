$(document).ready(readyHandlers);

function readyHandlers() {
    console.log(`--- In readyHandlers function ---`);
    // connection test

    $('#add_task_btn').on('click', addTask);
    // event listener when the 'add_task_btn' is clicked, run 'addTask' function
}

function addTask() {
    console.log(`--- In addTask function ---`);
    // connection test

    let taskInput = $('#task_input').val();

    $('#task_display_container').append(`
        <tr>
            <td>${taskInput}</td>
        </tr>
    `);

    $('#task_input').val('');
    // empty 'task_input
}