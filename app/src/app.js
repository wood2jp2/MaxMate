import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from './Router/Router'
import configureStore from './Store/configureStore'

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


ReactDOM.render(App, root)