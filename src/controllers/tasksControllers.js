const { models } = require("../db");

async function createTask (title, description, completed) {
    // Campo title obligatorio para que se cree la tarea.
    if (!title) {
        throw new Error ("El título de la tarea es un campo obligatorio.")
    };

    // Creación de nueva tarea, con valores por getDefaultCompilerOptions, en caso de no recibirlos.
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

async function getFiltered(completed) {
    const filter = completed !== undefined 
        ? { completed: completed === 'true' } // Convierte la query string a booleano
        : {};
    // Si no se recibe por query un valor para completed, se devuelve un arreglo con todas las tareas.
    const tasks = await models.Task.find(filter);
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
        // Validaciones individuales de cada uno de los parámetros que se pueden actualizar. Todos son opcionales.
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

module.exports = { getTasks, getFiltered, createTask, getTaskById, updateTask, deleteTask }