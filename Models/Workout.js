import mongoose from 'mongoose'
const { Schema } = mongoose

const WorkoutSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    scheduledFor: {
        type: Date,
        required: true
    },
    exercises: {
        type: Array,
        required: true
    }
})

const Workout = mongoose.model("workouts", WorkoutSchema)

export default Workout