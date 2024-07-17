const express = require('express');

const route = require('./route');

const app = express();

app.use(route);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/student', (req, res) => {
    res.send('I am student');
});

app.listen(3000, () => {
    console.log('server started');
});