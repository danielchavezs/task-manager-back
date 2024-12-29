const server = require("../../E-COMMERCE/Stayfy/stayfy-back/src/server.js");
const { conn } = require('../../E-COMMERCE/Stayfy/stayfy-back/src/db.js');
const http = require('http');
const PORT = process.env.PORT || 3001;

conn.sync({ alter: true }).then( async () => {
  const httpServer = http.createServer(server);
  httpServer.timeout = 300000;

  server.listen(PORT, 
    () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error));
