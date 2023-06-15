const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'SEMANA_07/03_AUT_EST_ENTREGA/data/db_curriculum.db';

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

/* Colocar toda a parte estática no frontend */
app.use(express.static("SEMANA_07/03_AUT_EST_ENTREGA/frontend/"));

/* Definição dos endpoints */
/******** CRUD ************/
app.use(express.json());


function returnDbAllAsPromise(sql, dbpath) {
	return new Promise((resolve, reject) => {
		let db = new sqlite3.Database(dbpath); // Abre o banco
		db.serialize(() => {
			executeDbAllAsPromise(sql, db).then((result) => {
				resolve(result);
			}).catch((err) => {
				reject(err);
			})
		})
		db.close(); // Fecha o banco
	})
}

function returnDbRunAsPromise(sql, dbpath) {
	return new Promise((resolve, reject) => {
		let db = new sqlite3.Database(dbpath); // Abre o banco
		db.serialize(() => {
			executeDbRunAsPromise(sql, db).then((result) => {
				resolve(result);
			}).catch((err) => {
				reject(err);
			})
		})
		db.close(); // Fecha o banco
	})
}

function executeDbRunAsPromise(sql, db) {
	return new Promise((resolve, reject) => {
		db.run(sql, [],  (err, rows) => {
			if (err) {
				reject(err);
			}
			resolve(rows)
		});
	})
}

function executeDbAllAsPromise(sql, db) {
	return new Promise((resolve, reject) => {
		db.all(sql, [],  (err, rows) => {
			if (err) {
				reject(err);
			}
			resolve(rows)
		});
	})
}

async function selectAllFromACurriculum(curriculum_id, curriculum, dbpath) {
	let sql = "SELECT * FROM tb_cv_achievement WHERE id_curriculum_vitae = " + curriculum_id;
	await returnDbAllAsPromise(sql, dbpath).then((achievements) => {
		curriculum["achievements"] = achievements;
	})

	sql = "SELECT * FROM tb_cv_ability WHERE id_curriculum_vitae = " + curriculum_id;
	await returnDbAllAsPromise(sql, dbpath).then((abilities) => {
		curriculum["abilities"] = abilities;
	})
			
	sql = "SELECT * FROM tb_cv_personality_attr WHERE id_curriculum_vitae = " + curriculum_id;
	await returnDbAllAsPromise(sql, dbpath).then((personalityAttrs) => {
		curriculum["personality_attr"] = personalityAttrs;
	})
				
	sql = "SELECT * FROM tb_cv_experience WHERE id_curriculum_vitae = " + curriculum_id;
	await returnDbAllAsPromise(sql, dbpath).then((experiences) => {
		curriculum["experiences"] = experiences;
	})

	sql = "SELECT * FROM tb_cv_education WHERE id_curriculum_vitae = " + curriculum_id;
	await returnDbAllAsPromise(sql, dbpath).then((education) => {
		curriculum["education"] = education;
	})
	return curriculum;
}

async function removeCurriculumItem(id_curriculum, table) {
	sql = "DELETE FROM " + table + " WHERE id_curriculum_vitae='" + id_curriculum + "';";
	return new Promise((resolve, reject) => {
		returnDbRunAsPromise(sql, DBPATH).then((result) => {
			resolve(result);
		}).catch((err) => {
			reject(err);
		})
	})
}

// Retorna todos registros (é o R do CRUD - Read)
app.get('/get-resumes', async (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	let sql = 'SELECT * FROM tb_curriculum_vitae';
	await returnDbAllAsPromise(sql, DBPATH).then(async (results) => {
		let responseArray = []
		for (let result of results) {
			let resultId = result.id_curriculum_vitae;
			result = await selectAllFromACurriculum(resultId, result, DBPATH);
			responseArray.push(result);
		}
		return responseArray;
	}).then((responseArray) => {
		res.json(responseArray);
	})
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
app.get('/update-resume', async (req, res) => {
	res.statusCode = 200;
	let id_curriculum = req.query.id_curriculum_vitae;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "SELECT * FROM tb_curriculum_vitae " +
	"WHERE id_curriculum_vitae='" +
	id_curriculum + "'";

	await returnDbAllAsPromise(sql, DBPATH).then(async (result) => {
		await selectAllFromACurriculum(id_curriculum, result[0], DBPATH).then((response) => {
			res.json(response);
		});
	});
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
app.get('/delete-resume', urlencodedParser, async (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	let id_curriculum = req.query.id_curriculum_vitae;
	
	await removeCurriculumItem(id_curriculum, "tb_curriculum_vitae").then(async () => {
		await removeCurriculumItem(id_curriculum, "tb_cv_education");
		await removeCurriculumItem(id_curriculum, "tb_cv_experience");
		await removeCurriculumItem(id_curriculum, "tb_cv_achievement");
		await removeCurriculumItem(id_curriculum, "tb_cv_ability");
		await removeCurriculumItem(id_curriculum, "tb_cv_personality_attr");

		res.write('<p>CURRÍCULO REMOVIDO COM SUCESSO!</p>'+'<a href="/">VOLTAR</a>');
		res.end();
	});
});

app.get('/delete-education', urlencodedParser, async (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	let id_curriculum = req.query.id_curriculum_vitae;
	await removeCurriculumItem(id_curriculum, "tb_cv_education").then(() => {
		res.write('<p>FORMAÇÃO EDUCACIONAL REMOVIDA COM SUCESSO!</p>'+'<a href="/">VOLTAR</a>');
		res.end();
	})
});

app.get('/delete-experience', urlencodedParser, async (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	let id_curriculum = req.query.id_curriculum_vitae;
	await removeCurriculumItem(id_curriculum, "tb_cv_experience").then(() => {
		res.write('<p>EXPERIÊNCIA PROFISSIONAL REMOVIDA COM SUCESSO!</p>'+'<a href="/">VOLTAR</a>');
		res.end();
	})
});

app.get('/delete-achievement', urlencodedParser, async (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	let id_curriculum = req.query.id_curriculum_vitae;
	await removeCurriculumItem(id_curriculum, "tb_cv_achievement").then(() => {
		res.write('<p>CONQUISTA REMOVIDA COM SUCESSO!</p>'+'<a href="/">VOLTAR</a>');
		res.end();
	})
});

app.get('/delete-ability', urlencodedParser, async (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	let id_curriculum = req.query.id_curriculum_vitae;
	await removeCurriculumItem(id_curriculum, "tb_cv_ability").then(() => {
		res.write('<p>HABILIDADE REMOVIDA COM SUCESSO!</p>'+'<a href="/">VOLTAR</a>');
		res.end();
	})
});

app.get('/delete-personality_attr', urlencodedParser, async (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	let id_curriculum = req.query.id_curriculum_vitae;
	await removeCurriculumItem(id_curriculum, "tb_cv_personality_attr").then(() => {
		res.write('<p>ATRIBUTO DE PERSONALIDADE REMOVIDO COM SUCESSO!</p>'+'<a href="/">VOLTAR</a>');
		res.end();
	})
});

app.listen(process.env.PORT, () => {
  console.log(`Server running`);
});