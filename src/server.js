const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes");

// Configuración para ser empleada en la ejecución del servidor con express.
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

module.exports = server;