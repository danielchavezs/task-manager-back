const { Router } = require("express");
const { postTaskHandler, getTasksHandler, getTasksByIdHandler, updateTaskHandler, deleteTaskHandler, getFilteredHandler } = require("../handlers/tasksHandlers");

const tasksRouter = Router();

tasksRouter.post("/", postTaskHandler);
// tasksRouter.get("/", getTasksHandler);
tasksRouter.get("/", getFilteredHandler);
tasksRouter.get("/:id", getTasksByIdHandler);
tasksRouter.put("/:id", updateTaskHandler);
tasksRouter.delete("/:id", deleteTaskHandler);

module.exports = { tasksRouter }