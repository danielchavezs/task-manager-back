const { createTask, getTasks, getTaskById, updateTask, deleteTask, getFiltered } = require("../controllers/tasksControllers");


const postTaskHandler = async (req, res) => {
  const { title, description, completed } = req.body;
  try {
      const response = await createTask(title, description, completed);
      res.status(201).json({ success: true, data: response });
  } catch (error) {
      res.status(400).json({ success: false, message: error.message });
  }
};

const getTasksHandler = async (req, res) => {
  try {
      const response = await getTasks();
      res.status(200).json({ success: true, data: response });
  } catch (error) {
      res.status(500).json({ success: false, message: "Error obteniendo las tareas." });
  }
};

const getFilteredHandler = async (req, res) => {
  const { completed } = req.query;
  try {
      const response = await getFiltered(completed);
      res.status(200).json({ success: true, data: response });
  } catch (error) {
      res.status(500).json({ success: false, message: "Error filtrando las tareas." });
  }
};

const getTasksByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
      const response = await getTaskById(id);
      res.status(200).json({ success: true, data: response });
  } catch (error) {
      res.status(404).json({ success: false, message: error.message });
  }
};

const updateTaskHandler = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  try {
      const response = await updateTask(id, title, description, completed);
      res.status(200).json({ success: true, data: response });
  } catch (error) {
      res.status(400).json({ success: false, message: error.message });
  }
};

const deleteTaskHandler = async (req, res) => {
  const { id } = req.params;
  try {
      const response = await deleteTask(id);
      res.status(200).json({ success: true, data: response });
  } catch (error) {
      res.status(404).json({ success: false, message: error.message });
  }
};


module.exports = { 
  postTaskHandler, 
  getTasksHandler, 
  getFilteredHandler, 
  getTasksByIdHandler,
  updateTaskHandler, 
  deleteTaskHandler 
};