# Etapa 3 - CRUD: Create, Read, Update, Delete

Essa etapa tem por objetivo introduzir conceitos de criação, leitura, atualização e deleção de dados no banco de dados.
  

### Relacionados ao repositório dos professores

- `Este repositório`: repositório [Tutorial_M2](https://github.com/Intelihub/Tutorial_M2) utilizado pelos professores para disponibilizar as etapas do tutorial do módulo e os exercícios individuais.
- `Este diretório`: diretório apresentado nesta página, correspondente a todos os arquivos disponibilizados à etapa desta semana do tutorial (`TUTORIAL_M2/SEMANA_03/01_TUTORIAL`).

### Preparação

Antes de começar a execução das instruções desta etapa, copie para o **seu diretório desta etapa** o conteúdo (todos os arquivos) do seu diretório da etapa anterior (`01_TUTORIAL/Semana_02`).

* Perceba que a partir dessa etapa, você deve criar o diretório da semana no seu respositório :)

1. Banco de dados 
Para este tutorial, é fundamental que exista um banco de dados com o nome dbUser.db, no diretório data, e com a seguinte estrutura, que pode ser utilizada na aplicação DB Browser for SQLite:

```sql
    CREATE TABLE "usuario" (
        "userId"	INTEGER NOT NULL,
        "nome_completo"	char(128) NOT NULL,
        "email"	char(55) NOT NULL,
        "telefone"	char(14),
        PRIMARY KEY("userId" AUTOINCREMENT)
    )
````
2. "Front-end"

O desenvolvimento do front-end ainda não é uma preocupação, porém é super importante mostrar o resultado final de um endpoint (no caso /usuarios) sendo exibido no formato html? 
Sendo assim, basta criar o arquivo chamado index.html e colocá-lo na pasta frontend, contendo o seguinte código:

```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width" />
        <title>CRUD</title>
    </head>
    <h1>Listagem de Usuários</h1>
    <p><a href="/inserir.html">INSERIR NOVO USUÁRIO</a></p>

    <script>
        const url = '/usuarios';
    
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let usuarios = data;
            let saida = '';
            usuarios.map(function(usuario) {
            saida += '<strong> '+ `${usuario.nome_completo}` + '</strong> ' + `${usuario.email}`  + ' - ' +  `${usuario.telefone}`;
            saida += ' - <a href="/atualizaUsuario?idUser=' + `${usuario.userId}` + '">EDITAR</a>';
            saida += ' | <a href="/removeUsuario?idUser='+`${usuario.userId}`+'">REMOVER</a></br>';
            });
            document.getElementById('resultado').innerHTML = saida;
        })
        .catch(function(error) {
            console.log(error);
        });
        
    </script>

    <body>
        <div id="resultado"></div>
    </body>
    </html>
```

2. "Back-end"

Uma aplicação web é composta por uma série de requisições e respostas, e se as requisições exigem uma camada de persistência, é preciso fornecer todas operações para que os dados sejam armazenados. Estamos falando nesse caso do chamado CRUD, ou seja, CREATE (INSERT), READ (SELECT), UPDATE e DELETE. 

Para facilitar o entendimento, vamos imaginar que precisamos gerenciar os registros de usuários em nosso banco dbUser.db e dentro da tabela usuario.

E como as requisições no final das contas são endpoints, precisamos criá-los dentro do script app_41.js, o qual deve também existir dentro da pasta backend com o seguinte código:


```node
    const express = require('express'); 
    const bodyParser = require('body-parser');
    const urlencodedParser = bodyParser.urlencoded({ extended: false })

    const sqlite3 = require('sqlite3').verbose();
    const DBPATH = '../data/dbUser.db';

    const hostname = '127.0.0.1';
    const port = 3000;
    const app = express();

    /* Colocar toda a parte estática no frontend */
    app.use(express.static("../frontend/"));

    /* Definição dos endpoints */
    /******** CRUD ************/
    app.use(express.json());

    // Retorna todos registros (é o R do CRUD - Read)
    app.get('/usuarios', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*');
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = 'SELECT * FROM usuario ORDER BY nome_completo COLLATE NOCASE';
            db.all(sql, [],  (err, rows ) => {
                if (err) {
                    throw err;
                }
                res.json(rows);
            });
            db.close(); // Fecha o banco
    });

    // Insere um registro (é o C do CRUD - Create)
    app.post('/insereUsuario', urlencodedParser, (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        sql = "INSERT INTO usuario (nome_completo, email, telefone) VALUES ('" + req.body.nome + "', '" + req.body.email + "', " + req.body.telefone + ")";
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
    app.get('/atualizaUsuario', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        sql = "SELECT * FROM usuario WHERE userId="+ req.query.userId;
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
    app.post('/atualizaUsuario', urlencodedParser, (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        sql = "UPDATE usuario SET nome_completo='" + req.body.nome + "', email = '" + req.body.email + "' , telefone='" + req.body.telefone + "' WHERE userId='" + req.body.userId + "'";
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
    app.get('/removeUsuario', urlencodedParser, (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        sql = "DELETE FROM usuario WHERE userId='" + req.query.userId + "'";
        console.log(sql);
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        db.run(sql, [],  err => {
            if (err) {
                throw err;
            }
            res.write('<p>USUARIO REMOVIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
            res.end();
        });
        db.close(); // Fecha o banco
    });

    app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
    });
```
É importante ter também o arquivo package.json para facilitar a instalação automatizada das dependências:

```node
    {
    "dependencies": {
        "express": "^4.18.2",
        "sqlite3": "^5.1.2"
        }
    }
```

O código é bem denso, pois envolve todos os endpoints para gerenciamento dos dados de uma simples tabela. Agora imagine um banco de dados que contenha 10 tabelas? Entendeu o tamanho da brincadeira?

Se você perceber temos 5 endpoints relacionados diretamente com a tabela usuario: 

1. /usuarios: lista todos os usuários da tabela
2. /insereUsuario: este endpoint é chamado através de um método post, vindo de um formulário web (arquivo inserir.html na pasta frontend)
3. /atualizaUsuario: existem dois endpoints com o mesmo nome, porém um utilizando o método get e o outro com o método post. Isso indica que primeiro precisamos preencher um formulário web com os dados de um determinado usuário da tabela, para que a partir desse form (contido no arquivo atualizar.html), seja feita a execução do UPDATE. 
4. /removeUsuario: este endpoint utiliza o método get para remover um usuário da tabela (poderia ser utilizado também o método post)

## Demais arquivos 

Para a finalização do tutorial, é preciso ciar os arquivos inserir.html e atualizar.html, dentro da pasta frontend:

#atualizar.html
```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width" />
        <title>CRUD</title>
    </head>
    <h1>Atualização de Usuário</h1>
        <form name="form1" method="post" action="/atualizaUsuario">
            NOME COMPLETO: <input type="text" id="nome" name="nome" size="50" value="">
            <br>
            EMAIL: <input type="e-mail" id="email" name="email" value="">
            <br>
            TELEFONE: <input type="phone" id="telefone" name="telefone" value="">
            <br>
            <input type="hidden" id="userId" name="userId" value="">
            <input type="submit" value="ATUALIZAR">  
        </form>    
        <script>
            let url = new URL(window.location.href);
            let params = url.searchParams;
            url = '/atualizaUsuario?userId='+url.searchParams.get("userId");

            fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let usuarios = data;

                usuarios.map(function(usuario) {
                    document.getElementById('userId').value = usuario.userId;
                    document.getElementById('nome').value = usuario.nome_completo;
                    document.getElementById('email').value = usuario.email;
                    document.getElementById('telefone').value = usuario.telefone;
                });
                alert(response.json());
            })
            .catch(function(error) {
                console.log(error);
            });
        </script>
    </body>
    </html>
```

#inserir.html
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>INSERIR USUÁRIO</title>
    </head>
    <body>
    <form name="form1" method="post" action="/insereUsuario">
        NOME: <input type="text" name="nome" value="" required>
        <br>
        EMAIL: <input type="email" name="email" value="" required>
        <br>
        TELEFONE: <input type="tel" id="phone" name="telefone" placeholder="11-12345-6789" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" required>
        <br>
        <input type="submit" value="INSERIR">  
    </form>    
    </body>
    </html>
```

### Funcionamento do CRUD
  
1. No subdiretório `backend`, execute "npm i" para instalar os módulos obrigatórios.
2. Execute o comando `node app_41.js`
3. Abra no navegador o endereço que consta no terminal (`localhost:3000`) e observe que não existem usuários aparecendo na tela. Motivo: não existem registro no banco, portanto é preciso inserir um NOVO USUÁRIO.
4. A partir da inserção do usuário é possível fazer todo o gerenciamento dos dados por meio das interfaces, sem depender da aplicação DB Browser for SQLite.

**Caso não tenha conseguido conseguido executar algum ponto conforme aqui indicado, tire suas dúvidas com o instrutor de programação :)**

