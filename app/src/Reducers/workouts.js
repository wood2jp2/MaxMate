const workoutsReducerDefaultState = []

export default (state = workoutsReducerDefaultState, { type, id, workout, exercises, scheduledFor }) => {
    switch (type) {
        case "ADD_WORKOUT":
            console.log("ADDING WORKOUT REDUCER")
            return [...state, workout]
        case "REMOVE_WORKOUT":
            console.log("REMOVING WORKOUT REDUCER")
            return [...state].filter(workout => workout.id !== id)
        case "EDIT_WORKOUT":
            console.log("EDITING WORKOUT REDUCER")
            const workoutToEdit = [...state].filter(workout => workout.id === id)[0]
            const revisedState = [...state].filter(workout => workout.id !== id)

            workoutToEdit.exercises = exercises
            workoutToEdit.scheduledFor = scheduledFor

            return [...revisedState, workoutToEdit]
        default:
            return state
    }
}