const { createTask, getTasks, getTaskById, updateTask, deleteTask, getFiltered } = require("../controllers/tasksControllers");

// Handlers individuales para cada uno de los controladores.Algunos reciben argumentos por medio
// de query, el body o params. Usp del try - catch para la generación de las respuestas y presentación de errores.

const postTaskHandler = async (req, res) => {
    const { title, description, completed } = req.body;
    try {
        const response = await createTask(title, description, completed);
        console.log("Task created:", response);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getTasksHandler = async (req, res) => {
  try {
    const response = await getTasks();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getFilteredHandler = async (req, res) => {
  const { completed } = req.query;
  try {
    const response = await getFiltered(completed);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getTasksByIdHandler = async (req, res) => {
    const { id } = req.params;
    
    try {
      const response = await getTaskById(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
};


const updateTaskHandler = async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    
    try {
      const response = await updateTask(id, title, description, completed);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
};


const deleteTaskHandler = async (req, res) => {
    const { id } = req.params;
    
    try {
      const response = await deleteTask(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
};


module.exports = { postTaskHandler, 
  getTasksHandler, 
  getFilteredHandler, getTasksByIdHandler, updateTaskHandler, deleteTaskHandler };