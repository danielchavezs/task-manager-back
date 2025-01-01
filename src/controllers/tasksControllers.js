const { models } = require("../db");

// async function createTask (title, description, completed) {
//     // Campo title obligatorio para que se cree la tarea.
//     if (!title) {
//         throw new Error ("El título de la tarea es un campo obligatorio.")
//     };

//     // Creación de nueva tarea, con valores por getDefaultCompilerOptions, en caso de no recibirlos.
//     const newTask = await models.Task.create({
//         title,
//         description: description? description : "Descripción de la tarea pendiente de actualizar",
//         completed: completed? completed : false,
//     });

//     return newTask;
// };

// async function getTasks () {
//     const tasks = await models.Task.find();
//     return tasks;
// };

// async function getFiltered(completed) {
//     const filter = completed !== undefined 
//         ? { completed: completed === 'true' } // Convierte la query string a booleano
//         : {};
//     // Si no se recibe por query un valor para completed, se devuelve un arreglo con todas las tareas.
//     const tasks = await models.Task.find(filter);
//     return tasks;
// };


// async function getTaskById (id) {
//     const task = await models.Task.findById(id);
//     if (!task){
//         throw new Error ("No se encontró ninguna tarea con este ID.");
//     } else { return task }; 
// };

// async function updateTask (id, title, description, completed) {
//     const task = await models.Task.findById(id);

//     if (!task){
//         throw new Error ("No se encontró ninguna tarea con este ID.");
//     } else {
//         // Validaciones individuales de cada uno de los parámetros que se pueden actualizar. Todos son opcionales.
//         if (title && title.length > 0){
//             task.title = title;
//         }
//         if (description && description.length > 0){
//             task.description = description;
//         }
//         if (completed !== null && (completed === false || completed === true)){
//             task.completed = completed;
//         }
//         await task.save();
//     }
//     console.log("Tarea actualizada con éxito en la base de datos.")
//     return task;
// };

// async function deleteTask(id) {
//     try {
//         const result = await models.Task.deleteOne({ _id: id });

//         if (result.deletedCount === 0) {
//             throw new Error("No se encontró ninguna tarea con este ID.");
//         }

//         console.log("Tarea eliminada con éxito en la base de datos.");
//         return {
//             message: "Tarea eliminada con éxito en la base de datos.",
//         };
//     } catch (error) {
//         console.error("Error eliminando la tarea:", error.message);
//         throw new Error("Error eliminando la tarea. Por favor, inténtalo de nuevo.");
//     }
// };



class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}




async function createTask(title, description, completed) {
    if (!title) {
        throw new AppError("El título de la tarea es obligatorio.", 400);
    }

    const newTask = await models.Task.create({
        title,
        description: description || "Descripción pendiente",
        completed: completed || false,
    });

    return newTask;
}

async function getTasks() {
    return await models.Task.find();
}

async function getFiltered(completed) {
    const filter = completed !== undefined ? { completed: completed === 'true' } : {};
    return await models.Task.find(filter);
}

async function getTaskById(id) {
    const task = await models.Task.findById(id);
    if (!task) {
        throw new AppError("Tarea no encontrada.", 404);
    }
    return task;
}

async function updateTask(id, title, description, completed) {
    const task = await models.Task.findById(id);
    if (!task) {
        throw new AppError("Tarea no encontrada.", 404);
    }

    if (title) task.title = title;
    if (description) task.description = description;
    if (completed !== undefined) task.completed = completed;

    await task.save();
    return task;
}

async function deleteTask(id) {
    const result = await models.Task.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
        throw new AppError("Tarea no encontrada.", 404);
    }
    return { message: "Tarea eliminada con éxito." };
}



module.exports = { getTasks, getFiltered, createTask, getTaskById, updateTask, deleteTask };