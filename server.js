const express = require('express')
const app = express()
const cors = require('cors')
const MongoDB = require('mongodb').MongoClient
const assert = require('assert')

const port = process.env.PORT || 8008

app.use(cors())
app.use(express.static(__dirname + '/www'))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => res.send("Hello World!"))

app.get('/api/testReactCall', (req, res) => res.send("Test react call"))

app.get('/api/testInsertDocs', (req, res) => {
    const testData = [{ a: 4 }, { a: 5 }, { a: 6 }, {a: 7 }]
    insertDocuments(database, 'documents', testData, resultObj => {
        console.log("RESULT OF INSERT: ", resultObj)
    })
    res.send("Data has been inserted. Test has succeeded.")
})

app.post('/api/testInsertExercises', (req, res) => {
    console.log(req.data)
    const dataExercises = [...req.data.exercises]
    insertDocuments(database, 'exercises', dataExercises, resultObj =>{
        console.log("RESULT OF INSERT: ", resultObj)
    })
    res.send("Data has been inserted. Test has succeeded: ")
})

app.listen(port, () => console.log("Good Morning. Server listening on " + port))

const url = 'mongodb://localhost:27017';
const dbName = 'MaxMate'
const db = new MongoDB(url, { useNewUrlParser: true })
let database = null

db.connect((err, client) => {
    assert.equal(null, err)
    
    console.log("Connected successfully to server");
   
    database = client.db(dbName)
})

// this will insert duplicates of the same fields everytime.
const insertDocuments = (db, collection, data, callback) => {

    // Get the documents collection
    const table = db.collection(collection)

    table.insertMany([
        ...data
      ], (err, result) => {

        console.log(`Inserted ${result.ops.length} documents into the collection`)
        callback(result)
      });
  }

