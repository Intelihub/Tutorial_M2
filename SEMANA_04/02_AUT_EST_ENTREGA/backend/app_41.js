const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const sqlite3 = require('sqlite3').verbose();
const DBPATH = '../data/testeBreno.db';

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

/* Colocar toda a parte estática no frontend */
app.use(express.static("../frontend/"));

/* Definição dos endpoints */
/******** CRUD ************/
app.use(express.json());

// Retorna todos registros (é o R do CRUD - Read)
app.get('/Cabecalho', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM Cabecalho';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/insereCabecalho', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO Cabecalho (Nome, Email, Telefone, Cargo) VALUES ('" + req.body.Nome + "', '" + req.body.Email + "', '" + req.body.Telefone + "', '" + req.body.Cargo + "')";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.write('<p>CABEÇALHO INSERIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
	res.end();
});

// Monta o formulário para o update (é o U do CRUD - Update)
app.get('/atualizaCabecalho', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "SELECT * FROM Cabecalho WHERE Id_pessoa="+ req.query.Id_pessoa;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.all(sql, [],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/atualizaCabecalho', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "UPDATE Cabecalho SET Nome='" + req.body.Nome + "' , Email ='" + req.body.Email + "' , Telefone ='" + req.body.Telefone + "' , Cargo ='" + req.body.Cargo + "' WHERE Id_pessoa='" + req.body.Id_pessoa + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	res.write('<p>CABEÇALHO ATUALIZADO COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.get('/removeCabecalho', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM Cabecalho WHERE Id_pessoa='" + req.query.Id_pessoa + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>CABEÇALHO REMOVIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
		res.end();
	});
	db.close(); // Fecha o banco
});

app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});

app.get('/Formacao', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT Nome_curso, Ano_inicio, Ano_fim, Descricao, Id_formacao, Id_pessoa FROM Formacao ORDER BY Id_pessoa ASC';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
		res.write('<p>Formação funcionando</p>')
	});
	db.close(); // Fecha o banco
});

app.get('/Experiencia', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT Nome_empresa, Ano_empresa_inicio, Ano_empresa_fim, Cargo, Descricao, Id_empresa, Id_pessoa FROM Experiencia ORDER BY Id_pessoa ASC';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
		res.write('<p>Experiência funcionando</p>')
	});
	db.close(); // Fecha o banco
});

app.get('/Habilidades', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT Habilidade, Level_habilidade, Id_habilidades, Id_pessoa FROM Habilidades ORDER BY Id_pessoa DESC';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
		res.write('<p>Habilidades funcionando</p>')
	});
	db.close(); // Fecha o banco
});

app.get('/Idioma', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT Idioma, Level_idioma, Id_idioma, Id_pessoa FROM Idioma ORDER BY Id_pessoa ASC';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
		res.write('<p>Idioma funcionando</p>')
	});
	db.close(); // Fecha o banco
});

app.get('/Indicacoes', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT Nome_indicador, Data_indicacao, Indicacao, Id_indicacao, Id_pessoa FROM Indicacoes ORDER BY Id_pessoa ASC';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
		res.write('<p>Indicacoes funcionando</p>')
	});
	db.close(); // Fecha o banco
});

app.get('/Personalidade', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT Pesonalidade, Level_personalidade, Id_personalidade, Id_pessoa  FROM Personalidade ORDER BY Id_pessoa ASC';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
		res.write('<p>Personalidade funcionando</p>')
	});
	db.close(); // Fecha o banco
});

app.get('/sobremim', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT Local, Telefone, Email, Descricao, Id_SobreMim, Id_pessoa  FROM Sobre_Mim ORDER BY Id_pessoa ASC';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
		res.write('<p>Sobre Mim funcionando</p>')
	});
	db.close(); // Fecha o banco
});