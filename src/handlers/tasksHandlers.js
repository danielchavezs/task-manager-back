const { createTask, getTasks, getTaskById, updateTask, deleteTask } = require("../controllers/tasksControllers");

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


module.exports = { postTaskHandler, getTasksHandler, getTasksByIdHandler, updateTaskHandler, deleteTaskHandler };