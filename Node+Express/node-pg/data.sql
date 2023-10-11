\c biztime
DROP TABLE IF EXISTS industries;
DROP TABLE IF EXISTS companies_industries;

CREATE TABLE industries (
    code text PRIMARY KEY,
    name text NOT NULL UNIQUE);

CREATE TABLE companies_industries (
    id serial PRIMARY KEY,
    comp_code text NOT NULL REFERENCES companies ON DELETE CASCADE,
    ind_code text NOT NULL REFERENCES industries ON DELETE CASCADE);

INSERT INTO industries (code, name)
  VALUES ('tech', 'Technology' ),
         ('auto', 'Automotive'),
         ('health', 'Healthcare'),
         ('consume', 'Consumer Electronics' );

INSERT INTO companies_industries (ind_code, comp_code)
  VALUES ('tech', 'apple'),
         ('tech', 'ibm'),
         ('consume', 'apple'),
         ('consume','ibm');
