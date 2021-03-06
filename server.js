import express from 'express'
const app = express()

import cors from 'cors'
import mongoose from 'mongoose'

const port = process.env.PORT || 8008

import dotenv from 'dotenv'
const dotenvConfig = dotenv.config()

import User from './Models/User'
import Workout from './Models/Workout'

app.use(cors())
app.use(express.static(__dirname + '/www'))

// THESE ARE REQUIRED TO PROPERLY READ DATA REQUESTS SUCH AS POST
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended: true})); // to support URL-encoded bodies

app.post('/api/registerUser', (req, res) => {

})

app.get('/', (req, res) => res.send('attempting to get Heroku up and running'))

app.post('/api/addWorkout', (req, res) => {

    try {
        const workoutToAdd = req.body.data.workout 
        const newWorkout = new Workout(workoutToAdd)
        newWorkout.save()
    }
    catch (err) {
        console.log(err)
    }

    res.send("Workout has been added.")
})

app.get('/api/getWorkouts', (req, res) => 
    Workout.find((err, response) => err ? 
        console.log(err) : 
        res.send(response))
)

app.delete('/api/deleteWorkout/:id', (req, res) => {
    const workoutToDelete = req.params.id
    Workout.findByIdAndDelete(workoutToDelete, err => {
        if (err) throw new Error("Error deleting workout: ", err)
    })

    res.send("Completed deletion of workout.")
})

app.put('/api/editWorkout/:id', (req, res) => {
    const workoutToEdit = req.params.id

    Workout.findOneAndUpdate({ _id: workoutToEdit }, {
        exercises: req.body.data.exercises,
        scheduledFor: req.body.data.scheduledFor
    }, (err, res) => err ? console.log(err): console.log(res))

    res.send(`Workout with id of ${workoutToEdit} has been modified.`)
})

app.listen(port, () => console.log("Good Morning. Server listening on " + port))

const url = 'mongodb://localhost:27017/MaxMate'
const mongoUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVER}`

// var Josh = new User({ 
//     email: 'wood2jp2@gmail.com', 
//     firstName: 'Josh', 
//     lastName: 'Wood', 
//     username: 'wood2jp2',
//     dateCreated: Date.now()
// })

// Josh.save()

mongoose.connect(url, { useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

