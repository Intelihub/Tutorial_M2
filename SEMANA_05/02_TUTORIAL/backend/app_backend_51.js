
const express = require('express'); 
const hostname = '127.0.0.1';

/* Servidor do Banco de Dados */
const portback = 3051;
const sqlite3 = require('sqlite3').verbose(); 
const server = express();
const DBPATH = 'src/dbUser.db';

server.use(express.json())

server.get('', (req, res) => {
  res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH);
  var sql = 'SELECT * FROM tbUser WHERE userId = 1';
  db.get(sql, [], (err, row) => {
    if (err) {
      throw err;
    }
    //res.write("<h1> Teste do banco de dados</h1>") 
    //res.write("<h4> Informacoes do usuario cujo id = 1: </h2>") 
	  //res.write("title = " + row.title); 
    //res.write("<br />completed = " + row.completed); 
	  res.json(row);
   });
});

server.listen(portback, hostname, () => {
  console.log(`BD server running at http://${hostname}:${portback}/`);
});