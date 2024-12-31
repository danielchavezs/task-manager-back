require("dotenv").config();
const {DB_USER, DB_PASSWORD, DB_URL } = process.env;
const mongoose = require('mongoose');
const Task = require("./models/Task");

const dbStringConn = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.796kv.mongodb.net/task-manager?retryWrites=true&w=majority&appName=Cluster0`

// Conexión a otra base de datos. Agregar el enlace de conexión propio en el archivo .env
// const dbStringConn = `${DB_URL}`

// Conexión a la base de datos por medio de Mongoose
const connectDb = async () => {
    try {
      await mongoose.connect(dbStringConn);
      console.log("Database connected.");
    } catch (err) {
      console.error("Database connection error:", err);
      throw err;
    }
};

module.exports = { 
    connectDb, 
    models: {
      Task,
    }
};