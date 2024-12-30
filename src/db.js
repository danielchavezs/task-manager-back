require("dotenv").config();
const {DB_USER, DB_PASSWORD } = process.env;
const mongoose = require('mongoose');
const Task = require("./models/Task");

const dbStringConn = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.796kv.mongodb.net/task-manager?retryWrites=true&w=majority&appName=Cluster0`

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