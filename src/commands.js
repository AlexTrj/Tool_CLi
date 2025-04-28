#! 

const fs = require("fs")
const create_file = require("./create_file");
const Createtask = require("./modules/dto's/task")

const args = process.argv.slice(2);

const command = args[1];

const newTask = new Createtask();


switch(command)
{
    case ('add'||'-a'):

        newTask.Id = 1;
        newTask.Desciption = (args[2]);
        newTask.Status = 'done';
        newTask.CreatedAt = new Date();

        CreatedTask(newTask);

    break;
    case ('update'||'-u'):
    break;
    case ('delete'||'-d'):
    break;
}

function CreatedTask(task){

    const taskData = create_file.ReadFile();

    if(taskData == null){
        const jsonTask = create_file.CreateFileJson(JSON.stringify(task));
    }

    task.Id += 1

    const taskList = [
        taskData,
        task,
    ]

    const jsonTask = create_file.CreateFileJson(JSON.stringify(taskList));

    console.log(`Task add successfull (ID: ${task.Id})`)
}


