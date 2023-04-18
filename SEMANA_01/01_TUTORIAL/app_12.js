// Import the HTTP dependency
const http = require('http');

// Define DB-related params
const sqlite3 = require('sqlite3').verbose();

// Define server-related params
const hostname = '127.0.0.1';
const port = 3012;

// Instantiate the server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP OK
  res.setHeader('Content-Type', 'text/html'); // Send HTML as response
  var db = new sqlite3.Database('dbUser.db'); // Initialize the SQLite3 DB

  // 1. Query the table tbUser from the DB and return User#1's data
  // 2. Send the data to the client, with some template text
  db.get('SELECT * \
          FROM tbUser \
          WHERE userId = 1', [], (err, row) => {
    res.write("<h1> Etapa 1 - INSTALACAO </h1>")
    res.write("<h2> Servidor de Banco de Dados SQLite3 </h2>")
    res.write("<h3> " + row.title + "</h3>");
    res.end();
  });
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`); // Log the URL to the console
});