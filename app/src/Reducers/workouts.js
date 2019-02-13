import axios from 'axios'

const workoutsReducerDefaultState = []

export default (state = workoutsReducerDefaultState, { type, _id, workout, exercises, scheduledFor, dbWorkouts }) => {
    switch (type) {
        case "ADD_WORKOUT":
            console.log("ADDING WORKOUT REDUCER")

            axios.post('http://localhost:8008/api/addWorkout', {
                data: {
                    workout
                }
            })
                .then(res => console.log(res))
                .catch(err => console.log(err))

            return [...state, workout]
        case "REMOVE_WORKOUT":
            console.log("REMOVING WORKOUT REDUCER")

            axios.delete(`http://localhost:8008/api/deleteWorkout/${_id}`)
                .then(res => console.log(res))
                .catch(err => console.log(err))

            return [...state].filter(workout => workout._id !== _id)
        case "EDIT_WORKOUT":
            console.log("EDITING WORKOUT REDUCER")
            const workoutToEdit = [...state].filter(workout => workout._id === _id)[0]
            const revisedState = [...state].filter(workout => workout._id !== _id)

            axios.put(`http://localhost:8008/api/editWorkout/${_id}`, {
                data: {
                    exercises,
                    scheduledFor
                }
            })
                .then(res => console.log(res))
                .catch(err => console.log(err))

            workoutToEdit.exercises = exercises
            workoutToEdit.scheduledFor = scheduledFor

            return [...revisedState, workoutToEdit]
        case "GET_WORKOUTS":
            console.log('Getting workouts stored in MongoDB')

            // async function getWorkouts() {
            //     let res = axios.get('http://localhost:8008/api/getWorkouts')
            //     .then(response => response.data)
            //     .catch(err => console.log(err))

            //     let result = await res
            //     return result
            // }
            
            // let re = getWorkouts()
            // console.log(re)
            return [...dbWorkouts]
        default:
            return state
    }
}