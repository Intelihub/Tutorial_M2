BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Cabecalho" (
	"Nome"	TEXT,
	"Email"	TEXT,
	"Telefone"	TEXT,
	"Cargo"	TEXT,
	"Id_pessoa"	INTEGER,
	PRIMARY KEY("Id_pessoa")
);
CREATE TABLE IF NOT EXISTS "Habilidades" (
	"Habilidade"	TEXT,
	"Level_habilidade"	INTEGER,
	"Id_habilidades"	INTEGER,
	"Id_pessoa"	INTEGER,
	PRIMARY KEY("Id_habilidades"),
	FOREIGN KEY("Id_pessoa") REFERENCES "Cabecalho"("Id_pessoa")
);
CREATE TABLE IF NOT EXISTS "Realizacoes" (
	"Nome_realizacoes"	TEXT,
	"Ano_realizacoes"	INTEGER,
	"Descricao"	TEXT,
	"Id_realizacao"	INTEGER,
	"Id_pessoa"	INTEGER,
	PRIMARY KEY("Id_realizacao"),
	FOREIGN KEY("Id_pessoa") REFERENCES "Cabecalho"("Id_pessoa")
);
CREATE TABLE IF NOT EXISTS "Idioma" (
	"Idioma"	TEXT,
	"Level_idioma"	TEXT,
	"Id_idioma"	INTEGER,
	"Id_pessoa"	INTEGER,
	PRIMARY KEY("Id_idioma"),
	FOREIGN KEY("Id_pessoa") REFERENCES "Cabecalho"("Id_pessoa")
);
CREATE TABLE IF NOT EXISTS "Experiencia" (
	"Nome_empresa"	TEXT,
	"Ano_empresa_inicio"	TEXT,
	"Ano_empresa_fim"	INTEGER,
	"Cargo"	TEXT,
	"Descricao"	TEXT,
	"Id_experiencia"	INTEGER,
	"Id_pessoa"	INTEGER,
	PRIMARY KEY("Id_experiencia"),
	FOREIGN KEY("Id_pessoa") REFERENCES "Cabecalho"("Id_pessoa")
);
CREATE TABLE IF NOT EXISTS "Formacao" (
	"Nome_curso"	TEXT,
	"Organização"	TEXT,
	"Ano_inicio"	INTEGER,
	"Ano_fim"	INTEGER,
	"Id_formacao"	INTEGER,
	"Id_pessoa"	INTEGER,
	PRIMARY KEY("Id_formacao"),
	FOREIGN KEY("Id_pessoa") REFERENCES "Cabecalho"("Id_pessoa")
);
CREATE TABLE IF NOT EXISTS "Sobre_Mim" (
	"Descricao"	TEXT,
	"Id_SobreMim"	INTEGER,
	"Id_pessoa"	INTEGER,
	PRIMARY KEY("Id_SobreMim"),
	FOREIGN KEY("Id_pessoa") REFERENCES "Cabecalho"("Id_pessoa")
);


INSERT INTO "Cabecalho" ("Nome","Email","Telefone","Cargo","Id_pessoa") VALUES ('Breno Santos','breno.sanots@sou.inteli.edu','(31) 98508-0635','Estudante de engenharia de computação',1);
INSERT INTO "Habilidades" ("Habilidade","Level_habilidade","Id_habilidades","Id_pessoa") VALUES ('Python',4,1,1),
 ('Javascript',2,2,1),
 ('CSS',3,3,1),
 ('HTML',4,4,1);
INSERT INTO "Realizacoes" ("Nome_realizacoes","Ano_realizacoes","Descricao","Id_realizacao","Id_pessoa") VALUES ('2º lugar em hackthon de tecnologia',2020,'Em 2020 participei de um hackthon aonde foi prosposto o desenvolvimento de um protótipo para solucionar um problema propósto por uma empresa',1,1),
 ('Olimpíadas Acadêmicas',NULL,'Já participei de diversas olimpíadas acadêmicas, conseguindo algumas premiações como: 4 medalhas de ouro e 1 honra ao merito',2,1),
 ('Latin Leadership Academy',2023,'Fui admitido e participei da LALA, realizando também um bootcamp de 5 dias',3,1);
INSERT INTO "Idioma" ("Idioma","Level_idioma","Id_idioma","Id_pessoa") VALUES ('Português','4',1,1),
 ('Inglês','3',2,1),
 ('Italiano','1',3,1);
INSERT INTO "Experiencia" ("Nome_empresa","Ano_empresa_inicio","Ano_empresa_fim","Cargo","Descricao","Id_experiencia","Id_pessoa") VALUES ('Inteli','2023',2023,'Estudante','Fiz junto com outros estudantes um projeto de fazer uma solução gamificada para uma empresa',1,1),
 ('Inteli','2023',2023,'Estudante','Fiz junto com outros estudantes um projeto de fazer uma solução web para uma empresa',2,1);
INSERT INTO "Formacao" ("Nome_curso","Organização","Ano_inicio","Ano_fim","Id_formacao","Id_pessoa") VALUES ('Engenharia de computação','Inteli',2023,2026,1,1);
INSERT INTO "Sobre_Mim" ("Descricao","Id_SobreMim","Id_pessoa") VALUES ('Prazer meu nome é Breno tenho 18 anos e vim de Minas gerais e estou cursando atualmente Engenharia da coputação',1,1);
COMMIT;
