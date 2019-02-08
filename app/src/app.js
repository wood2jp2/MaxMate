import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from './Router/Router'
import configureStore from './Store/configureStore'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

store.subscribe(() => {
    const state = store.getState()
    const { workouts } = state

    console.log("WORKOUTS REDUX STATE: ", workouts)
})

const root = document.getElementById('root')

const App = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

// axios.get('http://localhost:8008/api/getWorkouts')
//     .then(data => {
//         console.log(data)
//         workoutsReducer(data, { type: "GET_WORKOUTS" })
//     })
//     .catch(err => err)

ReactDOM.render(App, root)
