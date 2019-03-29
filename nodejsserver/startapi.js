var cors = require('cors')

const express = require('express')
const app = express()
//app.use(cors())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const port = 3001
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const url = "mongodb://localhost:27017/";
const querystring = require('querystring');  

var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var ObjectId = require('mongodb').ObjectID;


app.get('/GetCustomers', (req, res) => {

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      //var query = { address: "Highway 37" };
      dbo.collection("customers1").find({}).toArray(function(err, result) {
          if (err) throw err;
        res.send(result);
        console.log(result);
        db.close();
      });
    });
});


app.get('/GetCustomer/:id', (req, res) => {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    let id = req.params.id;

    console.log(id);

    dbo.collection("customers1").findOne({"_id": new ObjectId(id)}, function(err, doc) {
      res.send(doc);
      console.log(doc);
      db.close();
   });

    
  });
});



///post
app.post('/AddCustomer', (req, res,next) => {
  console.log(req.body);

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers1").insertOne(req.body, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });

});///post ends


///post
app.post('/EditCustomer', (req, res,next) => {
  //console.log(req.body);

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    
    
    var dbo = db.db("mydb");
    let tempid = new ObjectId(req.body._id);
    console.log(tempid);
    var myquery = { _id:  tempid};
    var tempObj;
   
  //   dbo.collection("customers1").findOne({"_id": new ObjectId(id)}, function(err, doc) {
  //     res.send(doc);
  //     console.log(doc);
  //     db.close();
  //  });
    tempObj = req.body;
    delete tempObj._id;
    dbo.collection("customers1").updateOne(myquery,{$set: req.body}, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });



  });

});///post ends





app.listen(port, () => console.log(`Example app listening on port ${port}!`))