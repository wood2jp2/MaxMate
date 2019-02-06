const express = require('express')
const app = express()
const cors = require('cors')
const MongoDB = require('mongodb').MongoClient
const assert = require('assert')

const port = process.env.PORT || 8008

app.use(express.static(__dirname + '/www'))
app.use(cors())

app.get('/', (req, res) => res.send("Hello World!"))

app.get('/api/testReactCall', (req, res) => res.send("Test react call"))

app.listen(port, () => console.log("Good Morning. Server listening on " + port))

const url = 'mongodb://localhost:27017';
const dbName = 'MaxMate'
const db = new MongoDB(url)

db.connect((err, client) => {
    assert.equal(null, err)
    
    console.log("Connected successfully to server");
   
    const database = client.db(dbName);
    insertDocuments(database, () => client.close())
})

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }

