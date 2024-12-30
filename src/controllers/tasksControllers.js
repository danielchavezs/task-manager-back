const { models } = require("../db");

async function createTask (title, description, completed) {
    if (!title) {
        throw new Error ("El título de la tarea es un campo obligatorio.")
    };
    const newTask = await models.Task.create({
        title,
        description: description? description : "Descripción de la tarea pendiente de actualizar",
        completed: completed? completed : false,
    });

    return newTask;
};

async function getTasks () {
    const tasks = await models.Task.find();
    return tasks;
};

async function getTaskById (id) {
    const task = await models.Task.findById(id);
    if (!task){
        throw new Error ("No se encontró ninguna tarea con este ID.");
    } else { return task }; 
};


async function updateTask (id, title, description, completed) {
    const task = await models.Task.findById(id);

    if (!task){
        throw new Error ("No se encontró ninguna tarea con este ID.");
    } else {
        if (title && title.length > 0){
            task.title = title;
        }
        if (description && description.length > 0){
            task.description = description;
        }
        if (completed !== null && (completed === false || completed === true)){
            task.completed = completed;
        }
        await task.save();
    }
    console.log("Tarea actualizada con éxito en la base de datos.")
    return task;
};

async function deleteTask (id) {
    const task = await models.Task.findById(id);
    
    if (!task){
        throw new Error ("No se encontró ninguna tarea con este ID.");
    }

    task.deleteOne({
        where: {
            _id: id
        }
    });
    
    console.log("Tarea eliminada con éxito en la base de datos.");
    return {
        message: "Tarea eliminada con éxito en la base de datos."
    };
};

module.exports = { getTasks, createTask, getTaskById, updateTask, deleteTask }