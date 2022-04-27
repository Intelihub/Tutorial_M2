
const express = require('express'); 
const hostname = '127.0.0.1';

/* Servidor da aplicação (front) */
const portfront = 8051;
const app = express();
app.use(express.static("src/"));

app.listen(portfront, hostname, () => {
  console.log(`Page server running at http://${hostname}:${portfront}/`);
});