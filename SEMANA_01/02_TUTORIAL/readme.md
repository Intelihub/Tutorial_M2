# Desenvolvimento de aplicação web

## Descrição

Esse tutorial tem por objetivo demonstrar passo a passo a construção de uma aplicação simples, estruturada em duas partes: front-end e back-end.

O front-end é a parte que o usuário visualiza. O back-end é a comunicação com a base de dados. Ambas partes estão conectadas.

O tutorial é composto de 7 etapas que mostram progressivamente a construção da aplicação.

## Conceitos básicos

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

## Etapa 1 - Setup do ambiente

Essa etapa tem por objetivo testar a instalação do Node.js, Sqlite3, verificar se está funcionando corretamente e também as feramentas necessárias para desenvolvimento do projeto

### Passo-a-passo

#### Instalações

1. Baixar e instalar o Node.js: <https://nodejs.org/pt-br/>
2. Baixar e instalar o DB Browser for SQLite: <https://sqlitebrowser.org/>
3. Baixar e instalar o Postman: <https://www.postman.com/downloads/>
4. Baixar e instalar o VS Code:  [https://code.visualstudio.com/download]()
5. Crie uma conta no brModeloWeb:  [https://www.brmodeloweb.com/lang/pt-br/index.html]()
6. Abra o "Prompt de Comando" (Windows) no modo administrador ou "Terminal" (Mac) e digite:
   >npm install sqlite3
   >npm install express –save
7. GitHub:
   > 1. Criar conta pessoal (com e-mail Inteli)
   > 2. Baixar e instalar o GitHub Desktop
   > 3. Clonar este repositório repositório (File-Clone Repository) na sua maquina local (aba URL) https://github.com/Intelihub/Tutorial_M2/ escolhendo um diretório (pasta) do seu computador para que esse repositório do git seja clonado (Ex: C:\MODULO02_TUTORIAL).
   > 4. Clonar o seguinte repositório (File-Clone Repository) na sua maquina local (aba URL) https://github.com/Intelihub/Template_Aluno, escolhendo um diretório (pasta) do seu computador para que esse repositório do git seja clonado (Ex: C:\MODULO02_MEUGIT).

#### Instruções

1. Copie os arquivos abaixo **deste** diretório para pasta \SEMANA\_01\02\_TUTORIAL do **seu** GitHub
   
	> app\_11.js
	> app\_12.js
	> app\_13.js
	> dbUser.db

2. Abra o "Prompt de Comando" (Windows) ou "Terminal" (Mac) no modo Administrator no diretório acima e digite:
	> node app\_11.js

	**Resultado no NAVEGADOR:** <http://127.0.0.1:3001/>

	> Etapa 0 - INSTALACAO - Servidor Node.js
	> Meu servidor NODE.js funciona!

3. Semelhante ao feito em "2", digite:
   > node app\_12.js
   
   **Resultado no NAVEGADOR:** <http://127.0.0.1:3002/>

   > Etapa 0 - INSTALACAO
   > Servidor de Banco de Dados SQLite3
   > Usuario de teste lido com sucesso

4. Semelhante ao feito em "2" e "3", digite:
   > node app\_13.js

	**Resultado no NAVEGADOR:** <http://127.0.0.1:3003/?nome=andre>
   > Etapa 0 - INSTALACAO - EndPoint "GET"
   > Hello andre voce conseguiu um GET! bem sucedido

### Conclusão

Se os resultados observados no navegador para os itens "2", "3" e "4" das instruções foram os mesmos dos descritos nos itens, seus testes de instalação estão todos ok :)

**Caso algum ponto não tenha conseguido conforme esperado, aguarde a instrução da semana na qual todas as dúvidas serão solucionadas!**
