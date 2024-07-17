const express = require('express');
const app = express();

app.use(express.static('./'))

app.get("/", (req, res) => {
    res.end();
})

app.listen(3000, () => {
    console.log("Server started @http://localhost:3000");
})