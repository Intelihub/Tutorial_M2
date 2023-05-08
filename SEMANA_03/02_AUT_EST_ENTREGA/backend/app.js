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
app.delete('/removeFormacao', (req, res) => {
    res.json({info: 'Node.js, Express, and Postgres API'})
})

// Start server
app.listen(3000, () => {
    console.log(`App running on port 3000.`)
})