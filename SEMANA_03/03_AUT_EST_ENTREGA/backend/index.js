const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'data/db_curriculum.db';

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

/* Colocar toda a parte estática no frontend */
app.use(express.static("frontend/"));

/* Definição dos endpoints */
/******** CRUD ************/
app.use(express.json());

// Retorna todos registros (é o R do CRUD - Read)
app.get('/get-resumes', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM tb_curriculum_vitae';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/insert-resume', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO " + 
	"tb_curriculum_vitae(" + 
	"curriculum_name, " +
	"curriculum_job_role, " + 
	"curriculum_address, " +
	"curriculum_phone, " + 
	"curriculum_email, " + 
	"curriculum_desc" + 
	") VALUES (" + 
	"'" + req.body.curriculum_name + "', " + 
	"'" + req.body.curriculum_job_role + "', " + 
	"'" + req.body.curriculum_address + "', " + 
	"'" + req.body.curriculum_phone + "', " + 
	"'" + req.body.curriculum_email + "', " + 
	"'" + req.body.curriculum_desc + "'" + 
	");";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.write('<p>USUARIO INSERIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
	res.end();
});

// Monta o formulário para o update (é o U do CRUD - Update)
app.get('/update-resume', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "SELECT * FROM tb_curriculum_vitae " +
	"WHERE id_curriculum_vitae='" +
	req.query.id_curriculum_vitae + "'";

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
app.post('/update-resume', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "UPDATE tb_curriculum_vitae SET " + 
	"curriculum_name='" + req.body.curriculum_name + "', "+
	"curriculum_job_role = '" + req.body.curriculum_job_role + "' , " + 
	"curriculum_address='" + req.body.curriculum_address + "', " + 
	"curriculum_phone='" + req.body.curriculum_phone + "', " + 
	"curriculum_email='" + req.body.curriculum_email + "', " + 
	"curriculum_desc='" + req.body.curriculum_desc + "' " + 
	"WHERE id_curriculum_vitae='" + 
	req.body.id_curriculum_vitae + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	res.write('<p>USUARIO ATUALIZADO COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.get('/delete-resume', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM tb_curriculum_vitae " + 
	"WHERE id_curriculum_vitae='" + 
	req.query.id_curriculum_vitae + "'";
	
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>USUARIO REMOVIDO COM SUCESSO!</p>' +
			'<a href="/">VOLTAR</a>');
		res.end();
	});
	db.close(); // Fecha o banco
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});