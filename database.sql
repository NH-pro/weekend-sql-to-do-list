CREATE TABLE "to-dos" (
    "id" SERIAL PRIMARY KEY,
    "task" VARCHAR (250) NOT NULL,
    "completed" VARCHAR (1) NOT NULL
);

INSERT INTO "to-dos" ("task", "completed")
VALUES ('Brush teeth', 'Y'), ('Comb hair', 'N'), ('Eat breakfast', 'Y'),
('Pay bills', 'N'), ('Buy food', 'N'), ('Hang out with friend', 'Y'),
('Party all night long', 'Y'), ('Drink enough water', 'N');

UPDATE "to-dos"
SET "completed" = 
WHERE "id" = ;

DELETE FROM "to-dos"
WHERE "id" = ;

DROP TABLE "to-dos";