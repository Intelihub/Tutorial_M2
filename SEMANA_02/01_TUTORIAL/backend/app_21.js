const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3021;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'projeto.db';

app.use(express.json());

/* Definição dos endpoints */

// Retorna todos registros de usuários
app.get('/usuarios', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT matricula, nome, strftime("%d/%m/%Y",data_admissao) AS "data de contratação" FROM usuario ORDER BY nome COLLATE NOCASE';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// Retorna todos registros de projetos
app.get('/projetos', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT nome, strftime("%d/%m/%Y",data_inicio) AS "data de início", strftime("%d/%m/%Y",data_fim) AS "data de término" FROM projeto ORDER BY nome COLLATE NOCASE';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// Retorna todos registros de alocações
app.get('/alocacoes', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT  strftime('%d/%m/%Y',data_alocacao) AS 'data de alocação', projeto.nome, usuario.nome, qtde_horas \
             FROM alocacao \
             INNER JOIN projeto ON alocacao.cod_projeto = projeto.cod_projeto  \
             INNER JOIN usuario ON alocacao.cod_usuario = usuario.cod_usuario  \
             ORDER BY projeto.nome";
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});


/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});