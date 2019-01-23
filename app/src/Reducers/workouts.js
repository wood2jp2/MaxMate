const workoutsReducerDefaultState = []

export default (state = workoutsReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_WORKOUT":
            return [...state, action.workout]
    
        default:
            return state
    }
}