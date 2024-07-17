const express = require('express');

const fs = require('fs');

const app = express();

app.get("/id/:id/name/:name",(req,res)=>{
    
    res.send("Requested id is : " + req.params.id + " and Name : " + req.params.name);
})

app.listen(3000,()=>{
    console.log("Server started @http://localhost:3000");
})