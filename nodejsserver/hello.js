const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
console.log(mongodb)
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error)
        return console.log('error');
    console.log('connected');
    const db = client.db(databaseName);
})