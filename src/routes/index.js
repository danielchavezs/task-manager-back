const { Router } = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { tasksRouter } = require("./tasksRoutes");

const router = Router();

router.use(morgan("dev"));
router.use(cors());

router.use("/api/tasks", tasksRouter);

module.exports = router;