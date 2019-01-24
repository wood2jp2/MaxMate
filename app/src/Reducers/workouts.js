const workoutsReducerDefaultState = []

export default (state = workoutsReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_WORKOUT":
            return [...state, action.workout]
        case "REMOVE_WORKOUT":
            return [...state].filter(workout => workout.id !== action.id)
        case "EDIT_WORKOUT":
            const workoutToEdit = [...state].filter(workout => workout.id === action.id)[0]
            const revisedState = [...state].filter(workout => workout.id !== action.id)
            workoutToEdit.exercises = action.exercises
            return [...revisedState, workoutToEdit]
        default:
            return state
    }
}