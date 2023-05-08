// Express
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.static("../frontend/"));
app.use(express.json());
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

// SQLite
const sqlite3 = require('sqlite3').verbose();
const DBPATH = '../data/dbUser.db';

// READ
app.get('/listaFormacao', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    let db = new sqlite3.Database(DBPATH); // Abre o banco
    let sql = 'SELECT * FROM formations ORDER BY end_year COLLATE NOCASE';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
})

// CREATE
app.post('/insereFormacao', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco

    // AVISO: Há SQL Injection aqui!
    sql = `INSERT INTO formations (curriculum_id, name, start_year, end_year, description)
           VALUES (1, '${req.body.name}', '${req.body.start_year}', '${req.body.end_year}', '${req.body.description}
                   ');`;
    console.log(sql);
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
    });
    res.write('<p>Sucesso!</p><a href="/index.html">Voltar</a>');
    db.close(); // Fecha o banco
    res.end();
})

// UPDATE
app.get('/atualizaFormacao', (req, res) => {
    res.json({info: 'Node.js, Express, and Postgres API'})
})

app.post('/atualizaFormacao', (req, res) => {
    res.json({info: 'Node.js, Express, and Postgres API'})
})


// DELETE
// The correct verb would be DELETE, but I kept GET for simplicity
app.get('/removeFormacao', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    sql = "DELETE FROM formations WHERE formation_id='" + req.query.id + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
        res.write('<p>Formacao Removida!</p><a href="/index.html">Voltar</a>');
        res.end();
    });
    db.close(); // Fecha o banco
})

// Start server
app.listen(3000, () => {
    console.log(`App running on port 3000.`)
})