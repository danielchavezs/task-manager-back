const { Router } = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { tasksRouter } = require("./tasksRoutes");

// Archivo principal de configuración de los endpoints de la API con express,
// aunque por el momento solo se usa para la ruta "/api/tasks".

const router = Router();

router.use(morgan("dev"));
router.use(cors());

router.use("/api/tasks", tasksRouter);

module.exports = router;