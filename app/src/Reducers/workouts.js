const workoutsReducerDefaultState = []

export default (state = workoutsReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_WORKOUT":
            return [...state, action.workout]
        case "REMOVE_WORKOUT":
            return [...state].filter(workout => workout.id !== action.id)
        default:
            return state
    }
}