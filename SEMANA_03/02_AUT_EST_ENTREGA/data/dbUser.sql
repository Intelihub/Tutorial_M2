BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "curricula"
(
    "curriculum_id" INTEGER NOT NULL,
    "first_name"    TEXT,
    "last_name"     TEXT,
    "role"          TEXT    NOT NULL,
    "gravatar_URL"  TEXT,
    "address"       TEXT,
    "phone_number"  TEXT    NOT NULL,
    "email"         TEXT    NOT NULL,
    "biography"     TEXT,

    PRIMARY KEY ("curriculum_id" AUTOINCREMENT)
);

CREATE TABLE IF NOT EXISTS "abilities"
(
    "ability_id"    INTEGER NOT NULL,
    "curriculum_id" INTEGER NOT NULL,
    "name"          TEXT    NOT NULL,
    "level"         INTEGER NOT NULL,

    PRIMARY KEY ("ability_id" AUTOINCREMENT),
    FOREIGN KEY ("curriculum_id") REFERENCES "curricula" ("curriculum_id"),
    CONSTRAINT level_between_1_6 CHECK (level >= 1 AND level <= 6)
);

CREATE TABLE IF NOT EXISTS "personalities"
(
    "personality_id" INTEGER NOT NULL,
    "curriculum_id"  INTEGER NOT NULL,
    "name"           TEXT    NOT NULL,
    "level"          INTEGER NOT NULL,

    PRIMARY KEY ("personality_id" AUTOINCREMENT),
    FOREIGN KEY ("curriculum_id") REFERENCES "curricula" ("curriculum_id"),
    CONSTRAINT level_between_1_6 CHECK (level >= 1 AND level <= 6)
);

CREATE TABLE IF NOT EXISTS "realizations"
(
    "realization_id" INTEGER NOT NULL,
    "curriculum_id"  INTEGER NOT NULL,
    "name"           TEXT    NOT NULL,
    "year"           INTEGER NOT NULL,
    "description"    TEXT    NOT NULL,

    PRIMARY KEY ("realization_id" AUTOINCREMENT),
    FOREIGN KEY ("curriculum_id") REFERENCES "curricula" ("curriculum_id")
);

CREATE TABLE IF NOT EXISTS "experiences"
(
    "experience_id" INTEGER NOT NULL,
    "curriculum_id" INTEGER NOT NULL,
    "company_name"  TEXT    NOT NULL,
    "start_year"    INTEGER NOT NULL,
    "end_year"      INTEGER,
    "role"          TEXT    NOT NULL,
    "description"   TEXT    NOT NULL,

    PRIMARY KEY ("experience_id" AUTOINCREMENT),
    FOREIGN KEY ("curriculum_id") REFERENCES "curricula" ("curriculum_id"),
    CONSTRAINT level_between_1_6 CHECK (start_year >= end_year)
);

CREATE TABLE IF NOT EXISTS "formations"
(
    "formation_id"  INTEGER NOT NULL,
    "curriculum_id" INTEGER NOT NULL,
    "name"          TEXT    NOT NULL,
    "start_year"    INTEGER NOT NULL,
    "end_year"      INTEGER,
    "description"   TEXT    NOT NULL,

    PRIMARY KEY ("formation_id" AUTOINCREMENT),
    FOREIGN KEY ("curriculum_id") REFERENCES "curricula" ("curriculum_id"),
    CONSTRAINT level_between_1_6 CHECK (start_year <= end_year)
);

INSERT INTO curricula (first_name, last_name, role, gravatar_URL, address, phone_number, email, biography)
VALUES ('John', 'Doe', 'Web Developer', 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
        '1234 Main St', '555-555-5555', 'teste@example.com', 'Lorem ipsum');

INSERT INTO formations (curriculum_id, name, start_year, end_year, description)
VALUES (1, 'Formation 1', 2010, 2012, 'Lorem ipsum');

COMMIT;