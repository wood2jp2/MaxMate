const workoutsReducerDefaultState = []

export default (state = workoutsReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_WORKOUT":
            console.log("ADDING WORKOUT REDUCER")
            return [...state, action.workout]
        case "REMOVE_WORKOUT":
            console.log("REMOVING WORKOUT REDUCER")
            return [...state].filter(workout => workout.id !== action.id)
        case "EDIT_WORKOUT":
            console.log("EDITING WORKOUT REDUCER")
            const workoutToEdit = [...state].filter(workout => workout.id === action.id)[0]
            const revisedState = [...state].filter(workout => workout.id !== action.id)
            workoutToEdit.exercises = action.exercises
            return [...revisedState, workoutToEdit]
        default:
            return state
    }
}