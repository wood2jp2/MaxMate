import {combineReducers, createStore, applyMiddleware} from 'redux'
import workoutsReducer from '../Reducers/workouts'
import thunk from 'redux-thunk'

const reduxChromeExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default () => {
    const store = createStore(
        combineReducers({
            workouts: workoutsReducer
        }),
        applyMiddleware(thunk, reduxChromeExtension)
    )
    return store
}
