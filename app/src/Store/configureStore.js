import {combineReducers, createStore} from 'redux'
import workoutsReducer from '../Reducers/workouts'

export default () => {
    const store = createStore(
        combineReducers({
            workouts: workoutsReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}
