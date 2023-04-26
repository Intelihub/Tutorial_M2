BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "tb_curriculum_vitae" (
    "id_curriculum_vitae" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    "curriculum_photo" TEXT,
    "curriculum_name" TEXT NOT NULL,
    "curriculum_job_role" TEXT,
    "curriculum_address" TEXT NOT NULL,
    "curriculum_phone" TEXT NOT NULL,
    "curriculum_email" TEXT NOT NULL,
    "curriculum_desc" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "tb_cv_education" (
    "id_cv_education" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    "id_curriculum_vitae" INTEGER,
    "education_course" TEXT NOT NULL,
    "education_begin_year" DATE NOT NULL,
    "education_end_year" DATE NOT NULL,
    "education_description" TEXT NOT NULL,
    FOREIGN KEY("id_curriculum_vitae") REFERENCES "tb_curriculum_vitae"("id_curriculum_vitae") 
);

CREATE TABLE IF NOT EXISTS "tb_cv_experience" (
    "id_cv_experience" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    "id_curriculum_vitae" INTEGER,
    "experience_company_name" TEXT NOT NULL,
    "experience_job_role" TEXT NOT NULL,
    "experience_begin_year" DATE NOT NULL,
    "experience_end_year" DATE,
    "experience_description" TEXT NOT NULL,
    FOREIGN KEY("id_curriculum_vitae") REFERENCES "tb_curriculum_vitae"("id_curriculum_vitae") 
);

CREATE TABLE IF NOT EXISTS "tb_cv_achievement" (
    "id_cv_achievement" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_curriculum_vitae" INTEGER,
    "achievement_name" TEXT NOT NULL,
    "achievement_year" DATE NOT NULL,
    "achievement_description" TEXT NOT NULL,
    FOREIGN KEY("id_curriculum_vitae") REFERENCES "tb_curriculum_vitae"("id_curriculum_vitae") 
);

CREATE TABLE IF NOT EXISTS "tb_cv_ability" (
    "id_cv_ability" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_curriculum_vitae" INTEGER,
    "ability_name" TEXT NOT NULL,
    "ability_value" INTEGER NOT NULL,
    FOREIGN KEY("id_curriculum_vitae") REFERENCES "tb_curriculum_vitae"("id_curriculum_vitae")
);

CREATE TABLE IF NOT EXISTS "tb_cv_personality_attr" (
    "id_cv_personality_attr" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_curriculum_vitae" INTEGER,
    "attr_name" TEXT NOT NULL,
    "attr_value" INTEGER NOT NULL,
    FOREIGN KEY("id_curriculum_vitae") REFERENCES "tb_curriculum_vitae"("id_curriculum_vitae")
);
COMMIT;