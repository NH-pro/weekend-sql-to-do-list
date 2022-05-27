Boilerplate Setup Checklist:
    [] create server file
        [] create server.js
        [] create public folder
            [] create index.html
            [] create styles.css
            [] create client.js
            [] create vendors folder
                [] source jQuery.js inside this folder.
        [] create modules folder
            [] create pool.js --> to link database with server.
        [] create routes folder


Installs Setup Checklist:
    [] npm install
    [] add a .gitignore file and put node-modules in it
    [] npm install express
    [] npm install nodemon
        [] under "scripts", add "start": "nodemon server/server.js"
    [] npm install body-parser
    [] npm install pg


server.js Boilerplate:
    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser');
    const PORT = process.env.PORT || 5000;

    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser');
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log('listening on port', PORT);
    });


pool.js Boilerplate:
    const pg = require('pg');

    const config = {
        database: '*database name*',
        host: 'localhost',          
        port: 5432,
    }

    const pool = new pg.Pool(config);

    pool.on("connect", () => {
        console.log("connected to postgres");
    });
    
    pool.on("error", (err) => {
        console.log("error connecting to postgres", err);
    });
    
    module.exports = pool;


router.js Boilerplate:
    const express = require('express');
    const *router name* = express.Router();
    const pool = require('../modules/pool');

    module.exports = *router name* ;