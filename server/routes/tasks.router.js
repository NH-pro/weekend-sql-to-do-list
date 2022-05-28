const express = require('express');
const tasksRouter = express.Router();
const pool = require('../modules/pool');

tasksRouter.put('/', (req,res) => {
    console.log(req.body.newStatus ,req.body.taskId);
    // test to see what i'm working with is correct

    let sqlQuery = `
        UPDATE "to-dos"
        SET "completed" = $1
        WHERE "id" = $2
    `;

    let sqlParams = [
        req.body.newStatus,
        req.body.taskId
    ];

    pool.query(sqlQuery,sqlParams)
        .then(() => {
            console.log(`taskRouter.put Success!`);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(`taskRouter.put Failed!`, err);
            res.sendStatus(500);
        });
});

tasksRouter.post('/', (req, res) => {
    console.log(req.body.name);
    // test to see what i'm working with is correct

    let sqlQuery = `
        INSERT INTO "to-dos" ("task")
        VALUES ($1);
        `;

    let sqlParams = [req.body.name];

    pool.query(sqlQuery, sqlParams)
        .then(() => {
            console.log(`taskRouter.post Success!`);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(`taskRouter.post Failed!`, err);
            res.sendStatus(500);
        });
});

tasksRouter.delete('/', (req,res) => {
    console.log(req.body.deleteId);
    // test to see what i'm working with is correct

    let sqlQuery = `
        DELETE FROM "to-dos"
        WHERE "id" = $1;
    `;

    let sqlParams = [
        req.body.deleteId
    ];

    pool.query(sqlQuery,sqlParams)
        .then(() => {
            console.log(`taskeRouter.delete Success!`);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(`taskeRouter.delete Failed!`, err);
            res.sendStatus(500);
        });
});

tasksRouter.get('/', (req, res) => {
    let sqlQuery = 'SELECT * FROM "to-dos";';

    pool.query(sqlQuery)
        .then( result => {
            console.log(`taskRouter.get Success!`, result.rows);
            res.send(result.rows);
        })
        .catch(err => {
            console.log(`taskRouter.get Failed!`, err);
            res.sendStatus(500);
        });
});


module.exports = tasksRouter ;