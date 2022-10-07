const http = require('http');
const sqlite3 = require('sqlite3').verbose();
const hostname = '127.0.0.1';
const port = 3014;
let resultado = "";



const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    var db = new sqlite3.Database('dbUser.db');



    db.serialize(function () {
        db.each('SELECT * \
                 FROM tbUser', 
                 function (err, row) {
            console.log(row.userId + ': ' + row.title);
            resultado += '<div style="border-bottom: solid 1px black"><span style="font-weight: bold;">' + row.userId + '</span> | ' + row.title + '</div>';
        });
    });

    res.write('<!DOCTYPE html> \n<meta charset="UTF-8">\n<head> \n\t<title>Etapa 0 - LISTAGEM DE USUÁRIOS</title>\n</head> \
            \n<body> \
              \n\t<div id="main"> \
                     \n\t\t<h1> LISTA DE USUÁRIOS </h1>');
    res.write('\n\t\t<div>' + resultado + '</div> \n\t</div>');
    res.write('\n</body> \n</html>');
    res.end();
    resultado = "";
});




server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});