import mongoose from 'mongoose'
const { Schema } = mongoose

const WorkoutSchema = new Schema({
    workout: {
        type: Array,
        required: true
    }
})

const Workout = mongoose.model("workouts", WorkoutSchema)

export default Workout