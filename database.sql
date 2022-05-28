CREATE TABLE "to-dos" (
    "id" SERIAL PRIMARY KEY,
    "task" VARCHAR (250) NOT NULL,
    "completed" VARCHAR (1) DEFAULT 'N'
);

INSERT INTO "to-dos" ("task", "completed")
VALUES ('Brush teeth', 'N'), ('Comb hair', 'N'), ('Eat breakfast', 'N'),
('Pay bills', 'N'), ('Buy food', 'N'), ('Hang out with friend', 'N'),
('Party all night long', 'N'), ('Drink enough water', 'N');

UPDATE "to-dos"
SET "completed" = 
WHERE "id" = ;

DELETE FROM "to-dos"
WHERE "id" = ;

DROP TABLE "to-dos";