const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
//console.log(mongodb)
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
//     if(error)
//         return console.log('error');
//     console.log('connected');
//     const db = client.db(databaseName);
// })


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))