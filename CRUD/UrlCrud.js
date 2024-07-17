const express = require('express');
const app = express();

const data = [{ id: 1, name: "yagnik" }, { id: 2, name: "xyz" },];

app.get('/', (req, res) => {
    res.json(data);
});

app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.find(item => item.id === id)
    if (index) {
        res.json(index);
    } else {
        res.json({ massege: "Item not found", });
    }
});

app.post("/:name",(req,res)=>{
    const name = req.params.name;
    data.push({ id: data.length + 1, name });
    res.send(data);
})

app.put("/:id/:name",(req,res)=>{
    const id = parseInt(req.params.id);
    const name = req.params.name;
    const index = data.findIndex(item => item.id === id);
    if(index){
        data[index].name = name;
        res.send(data);
    } else {
        res.json({ massege: "Item not found", });
    }
})


app.delete("/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    // const index = data.findIndex(item => item.id === id)
    // data.splice(index, 1);
    const data2 = data.filter((item)=>{
        return item.id !== id;
    })
    res.json(data2);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});