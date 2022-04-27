
const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const hostname = '127.0.0.1';

/* Servidor do Banco de Dados */
const portback = 3052;
const sqlite3 = require('sqlite3').verbose();
const server = express();
const DBPATH = 'src/dbUser.db';

server.use(express.json());


/* Definição dos endpoints */
server.get('/users', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');

	var db = new sqlite3.Database(DBPATH);
  var sql = 'SELECT * FROM tbUser ORDER BY title COLLATE NOCASE';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close();
});


server.post('/userinsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 

	sql = "INSERT INTO tbUser (title, id, completed) VALUES ('" + req.body.title + "', 33, false)";
	var db = new sqlite3.Database(DBPATH); 
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close();
	res.end();
});

/* Inicia o servidor */
server.listen(portback, hostname, () => {
  console.log(`BD server running at http://${hostname}:${portback}/`);
});