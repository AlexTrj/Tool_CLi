const fs = require('fs')

const path = 'storage-task.json';

function CreateFileJson(jsonData){

    fs.writeFile("storage-task.json", jsonData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file', err);
        } else {
            console.log('Data written to file');
        }
    });
}

function ReadFile(){
    const dataTask = fs.readFileSync(path);

    const task = JSON.parse(dataTask);
    return task;
}

module.exports = {
    CreateFileJson,
    ReadFile
}
