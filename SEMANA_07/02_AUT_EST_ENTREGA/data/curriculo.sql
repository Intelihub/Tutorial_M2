BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "formacao" (
	"id_formacao"	INTEGER NOT NULL UNIQUE,
	"ano_inicio"	INTEGER NOT NULL,
	"ano_fim"	INTEGER,
	"nome_curso"	INTEGER NOT NULL,
	"descricao"	TEXT,
	"id_pessoa"	INTEGER NOT NULL,
	PRIMARY KEY("id_formacao" AUTOINCREMENT),
	FOREIGN KEY("id_pessoa") REFERENCES "info_pessoa"("id_pessoa")
);
CREATE TABLE IF NOT EXISTS "experiencia" (
	"id_experiencia"	INTEGER NOT NULL UNIQUE,
	"nome_empresa"	TEXT NOT NULL,
	"ano_inicio"	INTEGER NOT NULL,
	"ano_fim"	INTEGER,
	"descricao"	TEXT,
	"cargo"	TEXT,
	"id_pessoa"	INTEGER,
	PRIMARY KEY("id_experiencia" AUTOINCREMENT),
	FOREIGN KEY("id_pessoa") REFERENCES "info_pessoa"("id_pessoa")
);
CREATE TABLE IF NOT EXISTS "realizacao" (
	"id_realizacao"	INTEGER NOT NULL UNIQUE,
	"id_pessoa"	INTEGER NOT NULL,
	"ano"	INTEGER NOT NULL,
	"titulo"	INTEGER NOT NULL,
	"descricao"	INTEGER,
	PRIMARY KEY("id_realizacao" AUTOINCREMENT),
	FOREIGN KEY("id_pessoa") REFERENCES "info_pessoa"("id_pessoa")
);
CREATE TABLE IF NOT EXISTS "habilidades" (
	"id_habilidade"	INTEGER NOT NULL UNIQUE,
	"id_pessoa"	INTEGER NOT NULL,
	"nome"	TEXT NOT NULL,
	"qualidade"	INTEGER NOT NULL,
	PRIMARY KEY("id_habilidade" AUTOINCREMENT),
	FOREIGN KEY("id_pessoa") REFERENCES "info_pessoa"("id_pessoa")
);
CREATE TABLE IF NOT EXISTS "info_pessoa" (
	"id_pessoa"	INTEGER NOT NULL UNIQUE,
	"nome"	TEXT NOT NULL,
	"cep"	INTEGER NOT NULL,
	"telefone"	INTEGER NOT NULL,
	"endereco"	TEXT NOT NULL,
	"descricao"	TEXT NOT NULL,
	"cargo"	TEXT,
	"foto"	TEXT,
	"email"	TEXT,
	PRIMARY KEY("id_pessoa" AUTOINCREMENT)
);
INSERT INTO "info_pessoa" VALUES (3,'Rafa',9840129,1999999999,'China','Muito gostosa','Minha Namorada','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqJRJr4zCuffPTbfsXdg6cUj5FQXP_-7dLK_sW9zD9yA&s','rafaellacavalcante@sou.inteli.edu.br');
COMMIT;
