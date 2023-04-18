// Import the HTTP dependency
const http
  = require('http');

// Basic server setup
const hostname = '127.0.0.1'; // Hostname for the Web Server
const port = 3011; // PORT for the Web Server

// Server instantiation
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Return Success Status Code if we reach this part of the code
  res.setHeader('Content-Type', 'text/html'); // Send HTML as response

  // Send to the client a simple HTML page as the response's body
  res.end('<!DOCTYPE html> <head> <title>Etapa 0 - INSTALACAO</title></head> \
              <body>\
                <div id="main"> \
                       <h1> Etapa 1 - INSTALACAO - Servidor Node.js </h1> \
                       <H2> Meu servidor NODE.js funciona!</H2> </div> \
              </body> \
           </html>');
});

// Start Server, listening on the port & hostname defined previously
server.listen(port, hostname, () => {
  // Log to the console the location where the application is being served
  console.log(`Server running at http://${hostname}:${port}/`);
});