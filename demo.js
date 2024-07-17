const express = require('express');
const fs = require('fs');
const app = express();

app.get("/",(req,res)=>{
    res.send(fs.readFileSync("index.html","utf-8"));
});

app.get("/about", (req, res) => {
    res.send(fs.readFileSync("about.html", "utf-8"));
});

app.get("/contact", (req, res) => {
    res.send(fs.readFileSync("contact.html", "utf-8"));
});

app.get("/maravise", (req, res) => {
    res.send(fs.readFileSync("maravise.html", "utf-8"));
});

app.listen(3000,()=>{
    console.log("SErver Started @http://localhost:3000");
});