BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Cabecalho" (
	"Nome"	TEXT,
	"Email" TEXT,
	"Telefone" TEXT,
	"Cargo"	TEXT,
	"Id_pessoa"	INTEGER,
	PRIMARY KEY("Id_pessoa")
);
CREATE TABLE IF NOT EXISTS "Habilidades" (
	"Habilidade"	TEXT,
	"Level_habilidade"	INTEGER,
	"Id_habilidades"	INTEGER,
	"Id_pessoa"	INTEGER,
	FOREIGN KEY("Id_pessoa") REFERENCES "Cabecalho"("Id_pessoa"),
	PRIMARY KEY("Id_habilidades")
);
CREATE TABLE IF NOT EXISTS "Experiencia" (
	"Nome_empresa"	TEXT,
	"Ano_empresa inicio"	TEXT,
	"Ano_empresa fim"	INTEGER,
	"Cargo"	TEXT,
	"Descricao"	TEXT,
	"Id_empresa"	INTEGER,
	"Id_pessoa"	INTEGER,
	FOREIGN KEY("Id_pessoa") REFERENCES "Cabecalho"("Id_pessoa"),
	PRIMARY KEY("Id_empresa")
);
CREATE TABLE IF NOT EXISTS "Formacao" (
	"Nome_curso"	TEXT,
	"Ano_inicio"	INTEGER,
	"Ano_fim"	INTEGER,
	"Descricao"	TEXT,
	"Id_formacao"	INTEGER,
	"Id_pessoa"	INTEGER,
	FOREIGN KEY("Id_pessoa") REFERENCES "Cabecalho"("Id_pessoa"),
	PRIMARY KEY("Id_formacao")
);
CREATE TABLE IF NOT EXISTS "Realizacoes" (
	"Nome_realizacoes"	TEXT,
	"Ano_realizacoes"	INTEGER,
	"Descricao"	TEXT,
	"Id_realizacao"	INTEGER,
	"Id_pessoa"	INTEGER,
	FOREIGN KEY("Id_pessoa") REFERENCES "Cabecalho"("Id_pessoa"),
	PRIMARY KEY("Id_realizacao")
);
CREATE TABLE IF NOT EXISTS "Idioma" (
	"Idioma"	TEXT,
	"Level_idioma"	TEXT,
	"Id_idioma"	INTEGER,
	"Id_pessoa"	INTEGER,
	FOREIGN KEY("Id_pessoa") REFERENCES "Cabecalho"("Id_pessoa"),
	PRIMARY KEY("Id_idioma")
);
CREATE TABLE IF NOT EXISTS "Personalidade" (
	"Pesonalidade"	TEXT,
	"Level_personalidade"	TEXT,
	"Id_pessoa"	INTEGER,
	"Id_personalidade"	INTEGER,
	FOREIGN KEY("Id_pessoa") REFERENCES "Cabecalho"("Id_pessoa"),
	PRIMARY KEY("Id_personalidade")
);
CREATE TABLE IF NOT EXISTS "Indicacoes" (
	"Nome_indicador"	TEXT,
	"Data_indicacao"	INTEGER,
	"Indicacao"	TEXT,
	"Id_indicacao"	INTEGER,
	"Id_pessoa"	INTEGER,
	FOREIGN KEY("Id_pessoa") REFERENCES "Cabecalho"("Id_pessoa"),
	PRIMARY KEY("Id_indicacao")
);
CREATE TABLE IF NOT EXISTS "Sobre_Mim" (
	"Local"	TEXT,
	"Telefone"	INTEGER,
	"Email"	TEXT,
	"Descricao"	TEXT,
	"Id_SobreMim"	INTEGER,
	"Id_pessoa"	INTEGER,
	FOREIGN KEY("Id_pessoa") REFERENCES "Cabecalho"("Id_pessoa"),
	PRIMARY KEY("Id_SobreMim")
);
COMMIT;