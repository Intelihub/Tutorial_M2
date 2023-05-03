
# Etapa 4 - Introdução a Javascript

  

Esta etapa tem por objetivo mostrar como aplicar Javascript para incluir scripts com lógica algorítmica na sua aplicação web.

  
## Glossário

### Relacionados ao seu repositório pessoal

- `Seu repositório`: seu repositório, existente na **sua conta do Github** criado a partir do [Template_Aluno](https://github.com/Intelihub/Template_Aluno), usado para todas as entregas individuais do módulo.
- `Seu diretório desta etapa`: diretório correspondente à etapa desta semana do tutorial no seu repositório (`02_TUTORIAL/Semana3`).

### Relacionados ao repositório dos professores

- `Este repositório`: repositório [Tutorial_M2](https://github.com/Intelihub/Tutorial_M2) utilizado pelos professores para disponibilizar as etapas do tutorial do módulo e os exercícios individuais.
- `Este diretório`: diretório apresentado nesta página, correspondente a todos os arquivos disponibilizados à etapa desta semana do tutorial (`TUTORIAL_M2/SEMANA_03/02_TUTORIAL`).




## Preparação

Antes de começar a execução das instruções desta etapa:
1. Como a proposta é a de apresentar o funcionamento da Linguagem de Programação Javascript, não será preciso ter necessariamente um servidor web. Por esse motivo usaremos o seguinte código em Node.js:

```
const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3031;
app.use(express.static("public"));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

2. No **seu diretório desta etapa** (`02_TUTORIAL/Semana 3`), crie o arquivo app_31.js e cole o código apresentado.

3. Como o script app_31.js aponta um diretório chamado public, é preciso criar exatamente com esse nome, no mesmo local. 
	
4. Para o perfeito funcionamento do tutorial, dentro do diretório public devemos ter essencialmente três arquivos, um chamado index.html, outro style.css e o último chamado script.js

## Instruções

Considerando arquivos presentes no **seu diretório desta etapa**:
1. No arquivo `index.html` do subdiretório `public`:
		
	```html 
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
		<title>ETAPA 3</title>
		<link rel="stylesheet" href="style.css" />	
		<script src="script.js"></script>

	</head>
	<body>
		<div id="main">
			<h1>ETAPA 3</h1>
			Introdução a Javascript
			<div id="calc" class="sections">
				<h3>Fazendo alguns cálculos</h3>
				Cálculos realizados e respectivos resultados obtidos:
			</div>
			<button onclick="calcula(10, 50)" class="button-calc">Calcular 10 + 50</button>
		</div>
	</body>
	</html>
	``` 
2. No arquivo script.js, é preciso inserir o seguinte código:

	```javascript 
	/* Função que calcula uma soma e mostra a operação realizada e o resultado obtido */
	function calcula(x, y){
		var op = "+";
		var resultado;
		if (op == "+") {
			resultado = x + y;
		};
		document.getElementById("saida").innerHTML = `${x} ${op} ${y} = ${resultado}`;
		console.log(`<br /> ${x} ${op} ${y} = ${resultado}`)
	}
	```

3. Como não poderia faltar o glamour, precisamos ter um pouco de estilo, e para isso o seguinte conteúdo precisa ser colocado no arquivo style.css:

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

		#saida{
			color: #547aa5;
			border: #ff4645 solid 5px;
			width: 200px;
			height: 40px;
			text-align: center;
			line-height: 40px;
			margin: 20px auto;
		}

		button {
			padding: 3;
			border: none;
			font: inherit;
			cursor: pointer;	
			border-radius: 5px;
			font-weight: 500;
			color: white;
			width: 150px;
			box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
						0 3px 1px -2px rgba(0, 0, 0, 0.12), 
						0 1px 5px 0 rgba(0, 0, 0, 0.2);
		}

		.button-calc{
			background-color: #547aa5;
		}
	```

4. Depois da receita feita, abra seu terminal, e execute `node app_31.js`.
5. Abra no navegador o endereço que consta no terminal (`localhost:3031`) e observe a linha informando o cálculo que foi realizado via javascript e seu respectivo resultado. 
6. Desafio: altere o tutorial transformando em uma calculadora completa, acrescentando as operação de subtração, multiplicação e divisão, além da soma é claro. Agora é a sua vez!!!

**Caso não tenha conseguido conseguido executar algum ponto conforme aqui indicado, tire suas dúvidas com o instrutor de programação :)**
