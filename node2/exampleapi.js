
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {

    var obj = {"name":"naveed"}


    //res.send('Hello World!');
    res.send(obj);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))