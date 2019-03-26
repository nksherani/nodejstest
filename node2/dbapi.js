var cors = require('cors')

const express = require('express')
const app = express()
app.use(cors())

const port = 3001
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient



app.get('/', (req, res) => {

    //var obj;

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      var query = { address: "Highway 37" };
//    dbo.collection("customers").find(query).toArray(function(err, result) {
      dbo.collection("customers").find({}).toArray(function(err, result) {
          if (err) throw err;
        //obj=result;
        res.send(result);
        console.log(result);
        db.close();
      });
    });


    //res.send('Hello World!');
    // res.send(obj);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))