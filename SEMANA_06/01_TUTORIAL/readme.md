# Etapa 6 - Introdução a JQuery

Essa etapa tem por objetivo mostrar como aplicar JQuery pode ser aplicado para facilitar a construção dos scripts JS da aplicação web, tornando-a dinâmica.
Como está no próprio site oficial www.jquery.com,  jQuery "é uma biblioteca JavaScript rápida, pequena e rica em recursos". Nesse sentido, o seu papel é o de facilitar a construção de elementos dinâmicos na página usando a estrutura DOM (Document Object Model), que é a essência da linguagem Javascript.
O script app_61.js será utilizado somente para subir o servidor Node, porém se você quiser abrir o arquivo index.html diretamente no navegador tudo irá funcionar. 
Procure, ao seguir as instruções, observar como funciona o JQuery e qual a sua diferença comparada com o uso de Javascript nativo, fator bastante importante.

## Instruções

Considerando arquivos presentes no **seu diretório desta etapa**, ou seja, os arquivos index.html, style.css e script.js na pasta frontend, e o arquivo app_61.js na pasta backend:

1. O arquivo `app_61.js` do subdiretório `backend`, precisa conter:
	
	```node 	
    const express = require('express'); 
    const app = express();

    const hostname = '127.0.0.1';
    const port = 3061;
    app.use(express.static("../frontend/"));

    app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    });	
	``` 

1. O arquivo `index.html` do subdiretório `frontend`, precisa conter:
	
	```html
    <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <title>ETAPA 6</title>
            <link rel="stylesheet" href="style.css" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
        </head>
        <body>
            <div id="main">
                <h1>ETAPA 6 - Introdução ao JQuery</h1>
                <div class="sections">
                    <h3>Calculadora</h3>
                    <form name="form1" id="form1">
                        <input type="text" size="4" id="num1" value="">
                        <select name="op" id="op">
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="/">/</option>
                            <option value="*">*</option>
                            <option value="%">%</option>
                        </select>
                        <input type="text" size="4" id="num2" value="">
                        <input type="submit" class="button-calc" value="CALCULAR">
                    </form>
                    <div id="calc"></div>
                </div>
                
            </div>
            <script src="script.js"></script>
        </body>
    </html>
	``` 

2. O arquivo `script.js` do subdiretório `frontend`, precisa conter::
  
  ```javascript
       var calcResDiv = "#calc";

        //Evento após a submissão do form
        $('#form1').on('submit', function(event) {     
            // Prevenir recarregamento de página
            event.preventDefault();
            // Obter os valores vindos do form
            let num1 = $('#num1').val();
            let num2 = $('#num2').val();
            let op   = $('#op').val();
            Calculadora(num1, num2, op);
        });

        /* Função que calcula uma soma e mostra a operação realizada e o resultado obtido */
        function Calculadora(x, y, op){
            let resultado = eval(x + op + y);
            $(calcResDiv).empty();
            $(calcResDiv).append(`${x} ${op} ${y} = ${resultado} `);
        }
  ```
  
 3. O arquivo `style.css` do subdiretório `frontend`, precisa conter:

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
        padding: 3em;
    }
    #calc{
        color: #547aa5;
        margin: 40px auto;
        width: 100px;
        height: 40px;
        line-height: 40px;
        border: #000 dashed 3px;
    }
  ```

## Funcionamento

1. Abra seu terminal, navegue até o subdiretório `backend` do seu diretório desta etapa e execute `node app_61.js` (não esqueça de instalar os módulos usando `npm i`).
2. Abra no navegador o endereço que consta no terminal (`localhost:3061`), preencha com novos valores e clique no botão CALCULAR. 
3. Observe ainda que o funcionamento do botão permanece o mesmo: clicando nele, um novo cálculo é realizado e aparece na página.


**Caso não tenha conseguido conseguido executar algum ponto conforme aqui indicado, tire suas dúvidas com o instrutor de programação :)**

