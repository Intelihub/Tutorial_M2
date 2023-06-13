const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const sqlite3 = require('sqlite3').verbose();
const DBPATH = './SEMANA_07/02_AUT_EST_ENTREGA/Curriculo/data/testeBreno.db';

const hostname = '127.0.0.1';
const port = 3030;
const app = express();

/* Servidor aplicação */

app.use(express.static("./SEMANA_07/02_AUT_EST_ENTREGA/Curriculo/frontend/"));
/* Definição dos endpoints */

/******** CRUD ************/
app.use(express.json());

// Retorna todos registros (é o R do CRUD - Read)
app.get('/users', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
	
	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Cabecalho ORDER BY Nome COLLATE NOCASE';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/userupdate', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	//res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "UPDATE Cabecalho SET Nome = '" + req.body.nome + "' WHERE Id_pessoa = 1 "
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});


app.listen(port, hostname, () => {
  console.log(`Page server running at http://${hostname}:${port}/`);
});