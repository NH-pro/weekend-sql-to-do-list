Boilerplate Setup Checklist:
    [x] create server file
        [x] create server.js
        [x] create public folder
            [x] create index.html
            [x] create styles.css
            [x] create client.js
            [x] create vendors folder
                [x] source jQuery.js inside this folder.
        [x] create modules folder
            [x] create pool.js --> to link database with server.
        [x] create routes folder


Installs Setup Checklist:
    [x] npm init
    [x] npm install
    [x] npm install express
    [x] add a .gitignore file
        [x] put node-modules in it
    [x] npm install nodemon
        [x] under "scripts", add "start": "nodemon server/server.js"
    [x] npm install body-parser
    [x] npm install pg


server.js Boilerplate:
    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser');
    const PORT = process.env.PORT || 5000;

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.static('server/public'));

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