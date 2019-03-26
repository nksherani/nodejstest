const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
//console.log(mongodb)
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'mydb'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error)
        return console.log('error');
    console.log('connected');
    const db = client.db(databaseName);

  //   var myobj = { name: "Company Inc", address: "Highway 37" };
  // db.collection("customers").insertOne(myobj, function(err, res) {
  //   if (err) throw err;
  //   console.log("1 document inserted");
  //   client.close();
  // });

  var myobj = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];

  db.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("multiple documents are inserted");
    client.close();
  });

})

