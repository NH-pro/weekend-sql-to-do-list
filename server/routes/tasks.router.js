const express = require('express');
const tasksRouter = express.Router();
const pool = require('../modules/pool');

tasksRouter.post('/', (req, res) => {
    console.log(req.body.name);
    let sqlQuery = 
        `INSERT INTO "to-dos" ("task")
        VALUES ($1);`

    let sqlParams = [req.body.name];

    pool.query(sqlQuery, sqlParams)
        .then(() => {
            console.log(`taskRouter.post Success!`);
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`taskRouter.post Failed!`, err);
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