const express = require("express");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const sqlite3 = require("sqlite3").verbose();
const DBPATH = "data/curriculo.db";

const hostname = "127.0.0.1";
const port = 3000;
const app = express();

/* Colocar toda a parte estática no frontend */
app.use(express.static("./frontend/"));

/* Definição dos endpoints */
/******** CRUD ************/
app.use(express.json());

// Retorna todos registros (é o R do CRUD - Read)
app.get("/cadastrados", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM info_pessoa ORDER BY nome COLLATE NOCASE";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post("/cadastra-dados", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  sql =
    "INSERT INTO inf	o_pessoa (nome, cep, telefone, endereco,descricao,cargo,foto,email) VALUES ('" +
    req.body.nome +
    "', " +
    req.body.cep +
    ", " +
    req.body.phone +
    ", '" +
    req.body.address +
    "', '" +
    req.body.description +
    "', '" +
    req.body.cargo +
    "', '" +
    req.body.photo +
    "', '" +
    req.body.email +
    "')";
  console.log(sql);
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
  });
  res.write('<p>USUARIO INSERIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
  db.close(); // Fecha o banco
  res.end();
});

// Monta o formulário para o update (é o U do CRUD - Update)
app.get("/atualiza-dados", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  sql = "SELECT * FROM info_pessoa WHERE id_pessoa =" + req.query.id_pessoa;
  console.log(sql);
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post("/atualiza-dados", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  sql =
    "UPDATE info_pessoa SET nome='" +
    req.body.nome +
    "',cep = " +
    req.body.cep +
    ", telefone =" +
    req.body.phone +
    ", endereco ='" +
    req.body.address +
    "', descricao ='" +
    req.body.description +
    "', cargo ='" +
    req.body.cargo +
    "', foto = '" +
    req.body.photo +
    "', email = '" +
    req.body.email +
    "' WHERE id_pessoa ='" +
    req.body.id_pessoa +
    "'";
  console.log(sql);
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
    res.end();
  });
  res.write('<p>USUARIO ATUALIZADO COM SUCESSO!</p><a href="/">VOLTAR</a>');
  db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.get("/remove-cadastro", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  sql = "DELETE FROM info_pessoa WHERE id_pessoa='" + req.query.id_pessoa + "'";
  console.log(sql);
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
    res.write('<p>USUARIO REMOVIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
    res.end();
  });
  db.close(); // Fecha o banco
});

// Retorna todos registros (é o R do CRUD - Read)
app.get("/formacao", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql =
    `SELECT  info_pessoa.nome, formacao.id_formacao, formacao.ano_inicio, formacao.ano_fim, formacao.nome_curso, formacao.descricao FROM formacao 
    INNER JOIN info_pessoa ON formacao.id_pessoa = info_pessoa.id_pessoa WHERE formacao.id_pessoa = ` +
    req.query.id_pessoa +
    ` ORDER BY formacao.nome_curso COLLATE NOCASE`;
  console.log(sql);
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
    console.log(rows);
  });

  db.close(); // Fecha o banco
});

// Retorna todos registros (é o R do CRUD - Read)
app.get("/experiencia", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql =
    `SELECT  info_pessoa.nome, experiencia.id_experiencia, experiencia.nome_empresa, experiencia.ano_inicio, experiencia.ano_fim, experiencia.cargo, experiencia.descricao FROM experiencia 
    INNER JOIN info_pessoa ON experiencia.id_pessoa = info_pessoa.id_pessoa WHERE experiencia.id_pessoa = ` +
    req.query.id_pessoa +
    ` ORDER BY experiencia.nome_empresa COLLATE NOCASE`;
  console.log(sql);
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
    console.log(rows);
  });
  db.close(); // Fecha o banco
});

// Retorna todos registros (é o R do CRUD - Read)
app.get("/habilidades", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql =
    `SELECT  info_pessoa.nome, habilidades.id_habilidade, habilidades.nome, habilidades.qualidade FROM habilidades 
    INNER JOIN info_pessoa ON habilidades.id_pessoa = info_pessoa.id_pessoa WHERE habilidades.id_pessoa = ` +
    req.query.id_pessoa +
    ` ORDER BY habilidades.nome COLLATE NOCASE`;
  console.log(sql);
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
    console.log(rows);
  });

  db.close(); // Fecha o banco
});

// Retorna todos registros (é o R do CRUD - Read)
app.get("/realizacao", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql =
    `SELECT  info_pessoa.nome, realizacao.id_realizacao, realizacao.titulo,realizacao.ano, realizacao.descricao FROM realizacao 
    INNER JOIN info_pessoa ON realizacao.id_pessoa = info_pessoa.id_pessoa WHERE realizacao.id_pessoa = ` +
    req.query.id_pessoa +
    ` ORDER BY realizacao.ano COLLATE NOCASE`;
  console.log(sql);
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
    console.log(rows);
  });

  db.close(); // Fecha o banco
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando!`);
});
