const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3021;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = './db_curriculum.db';

app.use(express.json());

/* Definição dos endpoints */
// Retorna todos registros de usuários
app.get('/resumes', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  	var sql = 'SELECT "curriculum_photo" AS "foto do currículo"' +
		',curriculum_name AS "nome"' +
		',curriculum_job_role AS "cargo"' +
		',curriculum_address AS "endereço"' +
		',curriculum_phone AS "telefone"' +
		',curriculum_email AS "email"' +
		',curriculum_desc AS "descrição"' +
		
		',tb_cv_education.education_course AS "curso"' +
		',tb_cv_education.education_begin_year AS "início do curso"' +
		',tb_cv_education.education_end_year AS "término do curso"' +
		',tb_cv_education.education_description AS "descrição do curso"' +

		',tb_cv_experience.experience_company_name AS "companhia"' +
		',tb_cv_experience.experience_begin_year AS "início da experiência"' +
		',tb_cv_experience.experience_end_year AS "término da experiência"' +
		',tb_cv_experience.experience_description AS "descrição da experiência"' +

		',tb_cv_achievement.achievement_name AS "realização"' +
		',tb_cv_achievement.achievement_year AS "data da conquista"' +
		',tb_cv_achievement.achievement_description AS "descrição da conquista"' +

		',tb_cv_ability.ability_name AS "nome da habilidade"' +
		',tb_cv_ability.ability_value AS "valor da habilidade"' +

		',tb_cv_personality_attr.attr_name AS "nome do atributo de personalidade"' +
		',tb_cv_personality_attr.attr_value AS "valor do atributo de personalidade"' +

		' FROM tb_curriculum_vitae' +

		' INNER JOIN tb_cv_education ON tb_curriculum_vitae.id_curriculum_vitae = tb_cv_education.id_curriculum_vitae ' + 
		' INNER JOIN tb_cv_experience ON tb_curriculum_vitae.id_curriculum_vitae = tb_cv_experience.id_curriculum_vitae ' + 
		' INNER JOIN tb_cv_achievement ON tb_curriculum_vitae.id_curriculum_vitae = tb_cv_achievement.id_curriculum_vitae ' +
		' INNER JOIN tb_cv_ability ON tb_curriculum_vitae.id_curriculum_vitae = tb_cv_ability.id_curriculum_vitae ' +
		' INNER JOIN tb_cv_personality_attr ON tb_curriculum_vitae.id_curriculum_vitae = tb_cv_personality_attr.id_curriculum_vitae';
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