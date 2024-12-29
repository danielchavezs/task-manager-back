const server = require("./src/server");
const { connectDb } = require("./src/db");
const PORT = 3001;

// Conectar a la base de datos y luego iniciar el servidor
connectDb()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });

    process.on("SIGINT", async () => {
      console.log("Closing server...");
      await mongoose.connection.close();
      console.log("Database connection closed.");
      process.exit(0);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });
