const express = require('express');
const tasksRouter = express.Router();
const pool = require('../modules/pool');

tasksRouter.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "to-dos";';

    pool.query(queryText)
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