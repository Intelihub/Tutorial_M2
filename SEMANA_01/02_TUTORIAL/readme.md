**Desenvolvimento de aplicação web**

**Descrição**

Esse tutorial tem por objetivo demonstrar passo a passo a construção de uma aplicação simples, estruturada em duas partes: front-end e back-end.

O front-end é a parte que o usuário visualiza. O back-end é a comunicação com a base de dados. Ambas partes estão conectadas

O tutorial é composto de 7 etapas que mostram progressivamente a construção da aplicação.

**Conceitos básicos**

- **HTTP: Hypertext Transfer Protocol** - protocolo para troca de dados na Web através de mensagens ("requests"). Exemplos de mensagens HTTP são GET, POST, PUT e DELETE.
- **URL: Uniform Resource Locator** - endereço web de recurso informático. Exemplo: quando se digita um determinado site em um navegador (Chrome, Edge, etc.), esse endereço é a URL e ao se pressionar ENTER está sendo feita uma requisição GET para o recurso dessa URL.
- **API: Application Programming Interface** - camada de comunicação para que recursos de uma aplicação possam ser utilizados por outra aplicação.
- **REST: Representational State Transfer** - arquitetura usada por APIs através de mensagens HTTP.
- **RESTfull** - expressão gramatical da capacidade de ser REST
- **Webservice** - é um tipo de API, que usa recursos da rede. Uma API RESTfull é um webservice.
- **Endpoint** - cada um dos pontos de uma API. Um endpoint é representado por uma URL (recurso) e um método (exemplos: GET, POST, PUT e DELETE). Uma API possui vários endpoints.
- **JavaScript** - linguagem de programação utilizada em aplicações web.
- **JSON - JavaScript Object Notation** - formato para troca de dados que usa o conceito chave: valor. Exemplo: {nome: "João", idade: 24}
- **JQuery** - biblioteca de funções do JavaScript.
- **Bootstrap** - biblioteca para desenvolvimento de front-ends web.

**Instalação:**

1. Baixar e instalar o Node.js: <https://nodejs.org/pt-br/>
1. Baixar e instalar o DB Browser for SQLite: <https://sqlitebrowser.org/>
1. Baixar e instalar o Postman: <https://www.postman.com/downloads/>
1. Baixar e instalar o VS Code:  [https://code.visualstudio.com/download]()
1. Crie uma conta no brModeloWeb:  [https://www.brmodeloweb.com/lang/pt-br/index.html]()
1. Abrir o "Prompt de Comando" (Windows) ou "Terminal" (Mac) e digitar:
   npm install sqlite3
   npm install express –save
1. GitHub: 
   1. Criar conta pessoal
   1. Baixar e instalar o GitHub Desktop
   1. Clonar o seguinte repositório (File-Clone Repository) na sua maquina local (aba URL): 
      1. URL: 
      1. Local path: Escolha uma pasta, de preferencia na raiz, Ex: C:\MODULO02

![](Aspose.Words.0068c766-795b-4c25-9fe6-991d546877f7.001.png)

**Etapa 1**

**Descrição**

Essa etapa tem por objetivo testar a instalação do Node.js, Sqlite3, verificar se está funcionando corretamente e também as feramentas necessárias para desenvolvimento do projeto

**Instruções**

1. Crie a seguinte árvore de estruturas no seu GitHub PESSOAL:

\SEMANA\_01

`	`\01\_AUT\_EST

`	`\02\_TUTORIAL

`	`\03\_AUT\_EST\_ENTREGA

`	`\04\_EX\_OBRIGATORIOS

`	`\05\_AUT\_EST\_EX\_OPCIONAIS 

\SEMANA\_02

...

\SEMANA\_10

1. COPIE os arquivos abaixo para a pasta \SEMANA\_01\02\_TUTORIAL do SEU GitHub
   app\_11.js

app\_12.js

app\_13.js

dbUser.db

1. Abrir o "Prompt de Comando" (Windows) ou "Terminal" (Mac) no modo Administrator NA PASTA ACIMA e digitar:
   npm install sqlite3
   npm install express --save
1. Execute os seguintes comandos na janela to terminal e verifique os resultados no navegador:

1 - node app\_11.js

**Resultado no NAVEGADOR:** <http://127.0.0.1:3011/>

Etapa 0 - INSTALACAO - Servidor Node.js

Meu servidor NODE.js funciona!

2 - node app\_12.js

**Resultado no NAVEGADOR:** <http://127.0.0.1:3012/>

`	`Etapa 0 - INSTALACAO

`	`Servidor de Banco de Dados SQLite3

Usuario de teste lido com sucesso

3 - node app\_13.js

**Resultado no NAVEGADOR:** <http://127.0.0.1:3013/?nome=andre>

` 	`Etapa 0 - INSTALACAO - EndPoint "GET"

`	`Hello andre voce conseguiu um GET! bem sucedido



