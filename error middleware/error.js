const express = require('express');

const app = express();

app.use((err,req, res, next) =>{
    console.error(err.message);
    res.status(500).send("Internal Server Error");
});

app.get('/error', (req, res, next) => {
    const err = new Error('Custom error for ');
    next(err);
}, (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


app.listen(3000,()=>{
    console.log("Server started @http://localhost:3000");
})