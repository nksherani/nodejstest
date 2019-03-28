var cors = require('cors')

const express = require('express')
const app = express()
//app.use(cors())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Add headers
// app.use(function (req, res, next) {

//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', '*');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   //res.setHeader('Access-Control-Allow-Credentials', true);

//   // Pass to next layer of middleware
//   next();
// });

const port = 3001
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient



app.get('/GetCustomers', (req, res) => {

    //var obj;

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      var query = { address: "Highway 37" };
      dbo.collection("customers").find({}).toArray(function(err, result) {
          if (err) throw err;
        res.send(result);
        console.log(result);
        db.close();
      });
    });
});
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
///post
app.post('/AddCustomer', (req, res,next) => {
  console.log(req.body);
  console.log(res);
  db.collection("customers").insertOne(req.body, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    client.close();
  });

});///post ends








app.listen(port, () => console.log(`Example app listening on port ${port}!`))