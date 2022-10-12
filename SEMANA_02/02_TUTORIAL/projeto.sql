BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "projeto" (
	"cod_projeto"	INTEGER NOT NULL,
	"nome"	char(255),
	"data_inicio"	char(10),
	"data_fim"	char(10),
	PRIMARY KEY("cod_projeto" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "usuario" (
	"cod_usuario"	integer NOT NULL,
	"matricula"	integer(11) NOT NULL UNIQUE,
	"data_admissao"	char(10) NOT NULL,
	"nome"	char(128) NOT NULL,
	PRIMARY KEY("cod_usuario" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "alocacao" (
	"cod_alocacao"	integer NOT NULL,
	"cod_projeto"	INTEGER,
	"cod_usuario"	INTEGER,
	"qtde_horas"	INTEGER,
	"data_alocacao"	TEXT,
	PRIMARY KEY("cod_alocacao" AUTOINCREMENT),
	FOREIGN KEY("cod_usuario") REFERENCES "usuario"("cod_usuario"),
	FOREIGN KEY("cod_projeto") REFERENCES "projeto"("cod_projeto")
);
INSERT INTO "projeto" VALUES (1,'Projeto 1','2022-04-01','2022-06-01'),
 (2,'Projeto 2','2022-05-01','2022-08-01');
INSERT INTO "usuario" VALUES (1,1234,'2020-01-01','Funcionário 1'),
 (2,1235,'2018-12-01','Funcionário 2');
INSERT INTO "alocacao" VALUES (1,1,1,20,'2022-05-01'),
 (2,1,2,100,'2022-06-01'),
 (3,2,1,50,'2022-06-30');
COMMIT;
