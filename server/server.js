const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const tasksRouter = require('./routes/tasks.router');
// defines tasks router path

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.use('/tasks', tasksRouter);
// Whenever server gets a request for '/tasks', they are sent to 'tasksRouter'.






app.listen(PORT, () => {
    console.log('listening on port', PORT);
});
