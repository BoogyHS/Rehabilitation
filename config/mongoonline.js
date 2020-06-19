
const MongoClient = require('mongodb').MongoClient;
//Replace <password> with the password for the Boogy user.
const uri = "mongodb+srv://Boogy:131311@boogy-xm4wc.mongodb.net/Boogy?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
