# Etapa 7 - Integração front-end e back-end e AJAX (Asynchronous Javascript And XML)

Essa etapa tem por objetivo demonstrar como integrar front e back-end e introduzir os conceitos relacionados a AJAX.
O conceito principal do AJAX é efetuar as requisições de forma assíncrona, sem a dependência de recarregar a página inteira para gerar o conteúdo dinâmico.
O tutorial é bem extenso e dividido em arquivos do back-end e front-end. No back-end temos todos os end points fazendo a composição do CRUD, e do lado do front-end duas partes, uma significando os testes envolvendo end points, e a outra apresentando as requisições do banco, em ambos os casos utilizando requisiçoes assíncronas.

## Instruções

Considerando arquivos presentes no **seu diretório desta etapa**:

### Back-end

1. O arquivo `app_71.js` do subdiretório `backend` deve conter o seguinte código:
	
	```node.js
    const express = require('express'); 
    const bodyParser = require('body-parser');
    const urlencodedParser = bodyParser.urlencoded({ extended: false })

    const sqlite3 = require('sqlite3').verbose();
    const DBPATH = 'dbUser.db';

    const hostname = '127.0.0.1';
    const port = 3071;
    const app = express();

    /* Servidor aplicação */

    app.use(express.static("../frontend/"));
    /* Definição dos endpoints */

    /******** CRUD ************/
    app.use(express.json());

    // Retorna todos registros (é o R do CRUD - Read)
    app.get('/users', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

        var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM tbUser ORDER BY nome COLLATE NOCASE';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });

    // Insere um registro (é o C do CRUD - Create)
    app.post('/userinsert', urlencodedParser, (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

        sql = "INSERT INTO tbUser (nome, email, telefone) VALUES ('" + req.body.nome + "', '" + req.body.email + "', '" + req.body.telefone + "')";
        console.log(sql);
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        db.run(sql, [],  err => {
            if (err) {
                throw err;
            }
        });
        db.close(); // Fecha o banco
        res.end();
    });

    // Atualiza um registro (é o U do CRUD - Update)
    app.post('/userupdate', urlencodedParser, (req, res) => {
        res.statusCode = 200;
        //res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

        sql = "UPDATE tbUser SET nome = '" + req.body.nome + "' WHERE userId = " + req.body.userId;
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        db.run(sql, [],  err => {
            if (err) {
                throw err;
            }
            res.end();
        });
        db.close(); // Fecha o banco
    });

    // Exclui um registro (é o D do CRUD - Delete)
    app.post('/userdelete', urlencodedParser, (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

        sql = "DELETE FROM tbUser WHERE userId = " + req.body.userId;
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
    ```
2. Ainda no diretório `backend`, crie o banco dbUser.db utilizando o seguinte comando SQL dentro do software DB Browser for SQLite: 

    ```sql
        CREATE TABLE "tbUser" (
            "userId"	INTEGER NOT NULL,
            "nome"	char(255) NOT NULL,
            "email"	char(128) NOT NULL,
            "telefone"	char(20) NOT NULL,
            PRIMARY KEY("userId" AUTOINCREMENT)
        )
    ```

### Front-end

## Usuários

1. Temos três arquivos que representam esta parte: `index.html`, `style.css` e `script.js`, no subdiretório `usuarios`:

1.1. O arquivo  `index.html` deve conter o seguinte código:

    ```html 
       <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <title>ETAPA 7</title>
            <link rel="stylesheet" href="style.css" />	
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="script.js"></script>

        </head>
        <body>
            <div id="main">
                <h1>ETAPA 7</h1>
                <h2>Integração front-end e back-end e AJAX</h2>
                
                <div id="get" class="sections">
                    <h3>PARTE 1 - Testando o endpoint externo</h3>
                    Resultados obtidos com a requisição GET de: https://jsonplaceholder.typicode.com/todos/1
                </div>
                <button onclick="TestGET()" class="button-get">END POINT REMOTO</button>
                
                <div id="getDB" class="sections">
                    <h3>Resultado GET FROM DB</h3>
                    Resultados obtidos com a requisição GET no nosso banco:
                </div>
                <button onclick="TestGETDB()" class="button-get-db">END POINT LOCAL</button>
            </div>
        </body>
        </html> 
    ```
1.2. O arquivo  `script.js` deve conter o seguinte código:

```javascript
        var getResDiv = "#get";
        var getDBResDiv = "#getDB";

        /* Função que faz um requisição GET */
        function TestGET(){
            var url = "https://jsonplaceholder.typicode.com/todos/1";

            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", url, false);
            xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
            $(getResDiv).append("<br />" + xhttp.responseText);
            $(getResDiv).append("<br />" + xhttp.responseText.title);
            //console.log(xhttp.responseText);
        }

        /* Função que faz um requisição GET no nosso banco de dados */
        function TestGETDB(){
            var url = "http://127.0.0.1:3071/users";
            var resposta;

            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", url, false);
            xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

            resposta = JSON.parse(xhttp.responseText);
            $(getDBResDiv).append("<br /><br />" + JSON.stringify(resposta));
            //console.log(xhttp.responseText);
        }

```

1.3. O arquivo  `style.css` deve conter o seguinte código:

```css
    body, html {
	width: 100%;
	height: 100%;
	background-color: #acb1bf;
	margin: 0;
	color: #ff4645;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    h1{
        background-color: #ff4645;
        color: white;
    }
    #main {
        max-width: 800px;
        min-height: 100%;
        margin: 0 auto;
        background-color: #FFFFFF;
        padding: 1rem;
        text-align: center;
    }
    .sections{
        padding: 1em;
    }
    #calc{
        color: #547aa5;
    }
    #get{
        color: #a34f74;
    }
    #getDB{
        color: #5b4696;
    }
    button {
        padding: 3px;
        border: none;
        font: inherit;
        cursor: pointer;	
        border-radius: 5px;
        font-weight: 500;
        color: white;
        width: 250px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 3px 1px -2px rgba(0, 0, 0, 0.12), 
                    0 1px 5px 0 rgba(0, 0, 0, 0.2);
    }
    .button-calc{
        background-color: #547aa5;
    }
    .button-get{
        background-color: #a34f74;
    }
    .button-get-db{
        background-color: #5b4696;
    }
```

## Admin

2. Temos três arquivos que representam esta parte: `index.html`, `style.css` e `script.js`, no subdiretório `admin`:

2.1. O arquivo  `index.html` deve conter o seguinte código:

    ```html 
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <title>ETAPA 7</title>
            <link rel="stylesheet" href="style.css" />	
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="script.js"></script>
        </head>
        <body>
            <div id="main">
                <h1>ETAPA 7</h1>
                Integração front e back-end e AJAX 
            </div>
        </body>
        </html>
    ```

2.2. O arquivo  `script.js` deve conter o seguinte código:

    ```javascript 
        api = 'http://127.0.0.1:3071'

        $(document).ready(() => {
            users.list();
        });

        var users = {
            
            list() {
                $.ajax({
                    url: api + '/users',
                    type: 'GET',
                    success: data => {
                        var tx = '';
                        tx += '<div class="insert" onclick="user.insert()">Inserir</div>';
                        data.forEach(element => {
                            tx += '<div class="user">';
                                tx += '<div class="title">' + `${element.nome} - ${element.email} - ${element.telefone} ` + '</div>';
                                tx += '<div class="actions">';
                                    tx += '<div class="action" onclick="user.update(' + element.userId + ',\'' + element.nome + '\')">Editar</div>';
                                    tx += '<div class="action" onclick="user.delete(' + element.userId + ')">Excluir</div>';
                                tx += '</div>';
                            tx += '</div>';
                        });
                        $('#main').html(tx);
                    }
                });
                
            }
            
        };

        var user = {

            insert() {
                var nome = prompt('Digite o nome:');
                var email = prompt('Digite o email:');
                var telefone = prompt('Digite o telefone:');
                console.log(`${nome} - ${email} - ${telefone}`);
                if (nome && email && telefone) {
                    if (nome.trim() != '' && email.trim() != '' && telefone.trim() != '') {
                        $.ajax({
                            type: 'POST',
                            url: api + '/userinsert',
                            data: {nome: nome, email: email, telefone: telefone},
                        }).done(function () {
                            users.list();
                        }).fail(function (msg) {
                            //console.log('FAIL');
                        }).always(function (msg) {
                            //console.log('ALWAYS');
                        });
                    }
                }
            },


            update(userId, oldTitle) {

                var nome = prompt('Digite o novo nome:', oldTitle);
                if (nome) {
                    if (nome.trim() != '') {
                        $.ajax({
                            type: 'POST',
                            url: api + '/userupdate',
                            data: {nome: nome, userId: userId},
                        }).done(function () {
                            users.list();
                        }).fail(function (msg) {
                            //console.log('FAIL');
                        }).always(function (msg) {
                            //console.log('ALWAYS');
                        });
                    }
                }
            },

            delete(userId) {

                if (confirm('Confirma a exclusão?')) {
                    $.ajax({
                        type: 'POST',
                        url: api + '/userdelete',
                        data: {userId: userId},
                    }).done(function () {
                        users.list();
                    }).fail(function (msg) {
                        //console.log('FAIL');
                    }).always(function (msg) {
                        //console.log('ALWAYS');
                    });
                }
            },

        }
    ```

2.3. O arquivo  `style.css` deve conter o seguinte código:

    ```css 
        body, html {
            width: 100%;
            height: 100%;
            background-color: #F0F0F0;
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
        }
        #main {
            max-width: 800px;
            min-height: 100%;
            margin: 0 auto;
            background-color: #FFFFFF;
            padding: 1rem;
            text-align: center;
        }
        .user {
            padding: 1rem;
            margin: 1rem;
            background-color: #F0F0F0;
            text-align: left;
        }
        .title {
            display: inline-block;
        }
        .actions {
            display: block;
            float: right;
        }
        .action {
            display: inline-block;
            padding-left: 0.25rem;
            padding-right: 0.25rem;
            margin-left: 0.25rem;
            margin-right: 0.25rem;
            color: blue;
            cursor: pointer;
        }
        .action:hover {
            text-decoration: underline;
        }
        .insert {
            padding-left: 0.25rem;
            padding-right: 0.25rem;
            margin-left: 0.25rem;
            margin-right: 0.25rem;
            color: blue;
            cursor: pointer;
        }
        .insert:hover {
            text-decoration: underline;
        }
    ```    

## Funcionamento

3.1. Teste o novo botão `END POINT REMOTO` da página `index.html` executando `app_71.js` no terminal e abrindo [localhost:3071/usuarios](localhost:3071/usuarios) no seu navegador para observar o seguinte resultado no texto acima desse botão:

```{ "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false }
undefined ```

3.2. Agora teste o botão `END POINT LOCAL` da mesma página `index.html` no seu navegador para observar o seguinte resultado no texto acima desse botão:

```[{"userId":6,"nome":"Flavinho Game Play","email":"flavinhogp@sou.inteli.edu.br","telefone":"112360873"}] ```

3.3. Abra a página index do diretório `admin` do `frontend`, acessando [localhost:3071/admin](localhost:3071/admin), e observe o funcionamento dessa página utilizando o código do arquivo `script.js` no mesmo subsiretório `admin`. Preste atenção especial ao funcionamento das chamadas ajax! Teste todos os elementos do CRUD e divirta-se!

**Caso não tenha conseguido conseguido executar algum ponto conforme aqui indicado, tire suas dúvidas com o instrutor de programação :)**
