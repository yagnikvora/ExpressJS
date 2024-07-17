const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const data = [{ id: 1, name: "yagnik" }, { id: 2, name: "xyz" },];

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json(data);
});

app.get('/selected', (req, res) => {
    const {id} = req.body;
    const index = data.find(item => item.id === id)
    if (index) {
        res.json(index);
    } else {
        res.json({ massege: "Item not found", });
    }
});

app.post("/", (req, res) => {
    const {name} = req.body;
    const id = data.length + 1;
    const obj = { id, name };
    data.push(obj);
    res.send(data);
})

app.put("/", (req, res) => {
    // const {id} = req.body;
    const {name,id} = req.body;
    const index = data.findIndex(item => item.id == id);
    const obj = {id,name};
    if (index != -1) {
        data[index] = obj;
        res.send(data);
    } else {
        res.json({ massege: "Item not found", });
    }
})


app.delete("/", (req, res) => {
    const {id} = req.body;
    // const index = data.findIndex(item => item.id === id)
    // data.splice(index, 1);
    const data2 = data.filter((item) => {
        return item.id !== id;
    })
    res.json(data2);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});