# Etapa 5 - Desenvolvimento do front-end estático

Essa etapa tem por objetivo introduzir conceitos de web design responsivo, para o desenvolvimento do front-end.
É importante observar que no html haverá algumas tags <div>, que por meio dos atributos id ou class irão incorporar as regras criadas no arquivo css, portanto a experimentação será somente a de redimensionar a página dentro do navegador e observar os breakpoints adicionados.

Para um layout responsivo ideal, precisamos de 3 elementos:

- Grid Flexível: pode-se usar o conceito de grid e trabalhar com medidas em percentual

- Imagens Flexíveis: observar se existe o seguinte trecho de código no css:

```css
/*imagens flexiveis*/
	img {   
  		max-width: 100%;   
  		height: auto;  
} 
```

- Media Queries: este é o elemento mais importante, pois é possível manter de acordo com intervalos, os valores de atributos dos seletores, de forma a permitir os ajustes que definem a responsividade.

```css
/*seletores para desktop*/
@media screen and (max-width: 1128px) {


}

/*seletores para tablets*/
@media screen and (max-width: 768px) {


}
```

### Relacionados ao repositório dos professores

- `Este repositório`: repositório [Tutorial_M2](https://github.com/Intelihub/Tutorial_M2) utilizado pelos professores para disponibilizar as etapas do tutorial do módulo e os exercícios individuais.
- `Este diretório`: diretório apresentado nesta página, correspondente a todos os arquivos disponibilizados à etapa desta semana do tutorial (`TUTORIAL_M2/SEMANA_05/02_TUTORIAL`).

### Preparação

A ideia é a de implementar front-end sem ter a necessidade de integrar com o back-end, portanto será utilizado somente a pasta frontend, e dentro dela precisam existir dois arquivos: index.html e estilo.css.

1. Conteúdo do arquivo index.html

```html
   <!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
	<title>Tutorial - Layout Responsivo</title>
    <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <div id="principal">
    <div id="logo"><img src="https://www.inteli.edu.br/wp-content/uploads/2022/04/28103439/Logo-Container.png" alt="Logotipo Inteli"></div>
    <div id="conteudo">
      <div class="interno">
        <h1>Institucional</h1>
        <p><img src="https://www.inteli.edu.br/wp-content/uploads/2022/07/06094246/novoformato_bannerhome_site_1440x640px-06-1.png" alt="Inteli"></p>
      </div>
    </div>
    <div id="lateral">
      <div class="interno">
        <h1>Conheça o Inteli</h1>
        <p>No Inteli formamos os futuros líderes de tecnologia do Brasil, preparando cada um dos nossos alunos para a realidade do mercado. Mostrando que tecnologia e formação de ponta são importantes e o lado humano delas também.</p>
      </div>
    </div>
    <div id="rodape">
      <p>Todos os direitos reservados.</p>
    </div>
  </div>
</body>
</html>
```

2. Conteúdo do arquivo estilo.css

```css
@charset "utf-8";
/* CSS Document */
	* {
		margin:0;
		padding:0;
		box-sizing: border-box;
	}
	/*imagens flexiveis*/
	img {   
  		max-width: 100%;   
  		height: auto;  
	} 
	body, html{
		background:#f1f1f1;
        color: #fff;
        height: 100%;
	}
	#principal{
		/* Largura máxima */
		max-width:960px;
		/* Alinha ao centro */
		margin:0 auto;
		background:#fff;
		overflow:hidden;
        height: 100%;
	}
    #logo {
        width: 100%;
        height: 15%;
    }
	#conteudo{
		/* Largura */
		width:60%;
		/* Alinha à esquerda */
		float:left;
        background-color: #70b9d6;
        height: 80%;
	}
	.interno{
		padding:10px;
	}
	#lateral{
		/* Largura */
		width:40%;
		/* Alinha à direita */
		float:right;
		background:rgb(25, 3, 44);
        height: 80%;
	}
    #rodape {
        width: 100%;
        height: 5%;
        clear: both;
        background-color: #666;
        text-align: center;
    }
/*seletores para desktops*/
@media screen and (max-width: 1128px) {
	#conteudo{ 
	   width: 70%;
	   background:#F00;
	}
	#lateral{ 
	   width: 30%;
	   background:rgb(151, 151, 26);
	}
}

/*seletores para tablets*/
@media screen and (max-width: 768px) {
	#conteudo{ 
	   width: 50%;
	   background:#F0F;
	}
	#lateral{ 
	   width: 50%;
	   background:#00f;
	}
}

/*seletores para celurares*/
@media screen and (max-width: 520px) {
	#conteudo{ 
	   width: 100%;
	   background:rgb(76, 12, 12);
       float: none;
       height: auto;
	}
	#lateral{ 
	   width: 100%;
	   background:rgb(118, 118, 24);
	   float: none;
       height: auto;
	}
}
```

### Funcionamento 
  
1. Agora que está tudo pronto, basta clicar duas vezes, isso mesmo, clicar duas vezes no arquivo index.html para que ele seja aberto no navegador. Mas por que isso? Justamente porque estamos lidando somente com um html estático, que não depende do servidor.
2. Ao abrir o html, é preciso redimensionar a página, e costuma funcionar clicando-se com o botão direito do mouse e depois na opção inspecionar, e depois só redimensionar para encontrar os 3 breakpoints.

### Breakpoint para desktop

@media screen and (max-width: 1128px) 

<img src="./frontend/breakpoint_desktop.png" alt="seletores para desktop">

### Breakpoint para tablet

@media screen and (max-width: 768px) 

<img src="./frontend/breakpoint_tablet.png" alt="seletores para tablet">

### Breakpoint para celular

@media screen and (max-width: 520px) 

<img src="./frontend/breakpoint_celular.png" alt="seletores para desktop">

**Caso não tenha conseguido conseguido executar algum ponto conforme aqui indicado, tire suas dúvidas com o instrutor de programação :)**

