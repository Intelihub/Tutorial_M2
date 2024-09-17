BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Cabecalho" (
	"Foto"	TEXT,
	"Nome"	TEXT,
	"Cargo"	TEXT,
	"Id pessoa"	INTEGER,
	PRIMARY KEY("Id pessoa"),
	FOREIGN KEY("Id pessoa") REFERENCES "Cabecalho"("Id pessoa"),
	FOREIGN KEY("Id pessoa") REFERENCES "Cabecalho"("Id pessoa")
);
CREATE TABLE IF NOT EXISTS "Habilidades" (
	"Level Ilustrator"	TEXT,
	"Level Photoshop"	TEXT,
	"Level CorelDraw"	TEXT,
	"Level Dreamweather"	TEXT,
	"Level HTML/CSS"	TEXT,
	"Id habilidades"	INTEGER,
	"Id pessoa"	INTEGER,
	PRIMARY KEY("Id habilidades"),
	FOREIGN KEY("Id habilidades") REFERENCES "Cabecalho"("Id pessoa"),
	FOREIGN KEY("Id pessoa") REFERENCES "Cabecalho"("Id pessoa")
);
CREATE TABLE IF NOT EXISTS "Experiencia" (
	"Nome empresa"	TEXT,
	"Ano empresa inicio"	TEXT,
	"Ano empresa fim"	INTEGER,
	"Cargo"	TEXT,
	"Descricao"	TEXT,
	"Id empresa"	INTEGER,
	"Id pessoa"	INTEGER,
	PRIMARY KEY("Id empresa"),
	FOREIGN KEY("Id empresa") REFERENCES "Cabecalho"("Id pessoa"),
	FOREIGN KEY("Id pessoa") REFERENCES "Cabecalho"("Id pessoa")
);
CREATE TABLE IF NOT EXISTS "Formacao" (
	"Nome curso"	TEXT,
	"Ano inicio"	INTEGER,
	"Ano fim"	INTEGER,
	"Descricao"	TEXT,
	"Id formacao"	INTEGER,
	"Id pessoa"	INTEGER,
	PRIMARY KEY("Id formacao"),
	FOREIGN KEY("Id formacao") REFERENCES "Cabecalho"("Id pessoa"),
	FOREIGN KEY("Id pessoa") REFERENCES "Cabecalho"("Id pessoa")
);
CREATE TABLE IF NOT EXISTS "Realizacoes" (
	"Nome realizacoes"	TEXT,
	"Ano realizacoes"	INTEGER,
	"Descricao"	TEXT,
	"Id realizacao"	INTEGER,
	"Id pessoa"	INTEGER,
	PRIMARY KEY("Id realizacao"),
	FOREIGN KEY("Id realizacao") REFERENCES "Cabecalho"("Id pessoa"),
	FOREIGN KEY("Id pessoa") REFERENCES "Cabecalho"("Id pessoa")
);
CREATE TABLE IF NOT EXISTS "Idioma" (
	"Idioma"	TEXT,
	"Level idioma"	TEXT,
	"Id idioma"	INTEGER,
	"Id pessoa"	INTEGER,
	PRIMARY KEY("Id idioma"),
	FOREIGN KEY("Id idioma") REFERENCES "Cabecalho"("Id pessoa")
);
CREATE TABLE IF NOT EXISTS "Personalidade" (
	"Pesonalidade"	TEXT,
	"Level personalidade"	TEXT,
	"Id pessoa"	INTEGER,
	"Id personalidade"	INTEGER,
	PRIMARY KEY("Id personalidade"),
	FOREIGN KEY("Id pessoa") REFERENCES "Cabecalho"("Id pessoa"),
	FOREIGN KEY("Id personalidade") REFERENCES "Cabecalho"("Id pessoa")
);
CREATE TABLE IF NOT EXISTS "Indicacoes" (
	"Nome indicador"	TEXT,
	"Data indicacao"	INTEGER,
	"Indicacao"	TEXT,
	"Id indicacao"	INTEGER,
	"Id pessoa"	INTEGER,
	PRIMARY KEY("Id indicacao"),
	FOREIGN KEY("Id pessoa") REFERENCES "Cabecalho"("Id pessoa"),
	FOREIGN KEY("Id indicacao") REFERENCES "Cabecalho"("Id pessoa")
);
CREATE TABLE IF NOT EXISTS "Sobre Mim" (
	"Local"	TEXT,
	"Telefone"	INTEGER,
	"Email"	TEXT,
	"Descricao"	TEXT,
	"Id SobreMim"	INTEGER,
	"Id pessoa"	INTEGER,
	PRIMARY KEY("Id SobreMim"),
	FOREIGN KEY("Id SobreMim") REFERENCES "Cabecalho"("Id pessoa"),
	FOREIGN KEY("Id pessoa") REFERENCES "Cabecalho"("Id pessoa")
);
COMMIT;
