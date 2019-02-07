import express from 'express'
const app = express()

import cors from 'cors'
import { MongoClient as MongoDB } from 'mongodb'
import assert from 'assert'
import mongoose from 'mongoose'

const port = process.env.PORT || 8008

import User from './Models/User'
import Workout from './Models/Workout'

// console.log("Josh: ", Josh)

app.use(cors())
app.use(express.static(__dirname + '/www'))

// THESE ARE REQUIRED TO PROPERLY READ DATA REQUESTS SUCH AS POST
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended: true})); // to support URL-encoded bodies

app.get('/', (req, res) => res.send("Hello World!"))

app.get('/api/testReactCall', (req, res) => res.send("Test react call"))

app.get('/api/deleteWorkout/:id', (req, res) => {
    const workoutToDelete = req.params.id
})

app.post('/api/testInsertExercises', (req, res) => {
    try {
        const workoutToAdd = { workout: [...req.body.data.workout] }
        const newWorkout = new Workout(workoutToAdd)
        newWorkout.save()
    }
    catch (err) {
        console.log(err)
    }

    res.send("Data has been inserted. Test has succeeded: ")
})

app.listen(port, () => console.log("Good Morning. Server listening on " + port))

const url = 'mongodb://localhost:27017/MaxMate';
let database = null

mongoose.connect(url, { useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

var Josh = new User({ 
    email: 'wood2jp2@gmail.com', 
    firstName: 'Josh', 
    lastName: 'Wood', 
    username: 'wood2jp2',
    dateCreated: Date.now()
})

Josh.save()

// const dbName = 'MaxMate'
// const db = new MongoDB(url, { useNewUrlParser: true })

// db.connect((err, client) => {
    
//     console.log("Connected successfully to server");
   
//     database = client.db(dbName)
// })

// this will insert duplicates of the same fields everytime.
// const insertDocuments = (db, collection, data, callback) => {

//     // Get the documents collection
//     const table = db.collection(collection)

//     table.insertOne(data, (err, result) => {
//         console.log(`Inserted ${result.ops.length} ${result.ops.length > 1 ? 'documents' : 'document'} into the collection`)
//         callback(result)
//     });
// }

