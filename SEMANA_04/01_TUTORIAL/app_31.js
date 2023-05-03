
const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3031;
app.use(express.static("public"));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});