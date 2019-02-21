import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import workoutsReducer from '../Reducers/workouts'
import thunk from 'redux-thunk'
import axios from 'axios'

const reduxChromeExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

let initialState = {
    workouts: []
}

// axios.get('http://localhost:8008/api/getWorkouts')
//     .then(response => initialState.workouts = [...response.data])
//     .catch(err => console.log(err))

export default () => {
    const store = createStore(
        combineReducers({
            workouts: workoutsReducer
        }),
        initialState,
        compose(applyMiddleware(thunk), reduxChromeExtension)
    )

    return store
}
