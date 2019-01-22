import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../Components/Header'
import HomePage from '../Components/HomePage'
import PageNotFound from '../Components/PageNotFound'
import WorkoutsPage from '../Components/WorkoutsPage'
import DietPage from '../Components/DietPage'
import AddWorkoutPage from '../Components/AddWorkoutPage';

const AppRouter = () => (
    <div>
        <Router>
            <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path='/diet' component={DietPage} />

                <Route path="/workouts" component={WorkoutsPage} />
                <Route exact path="/workouts/:id" render={props => {
                    return <AddWorkoutPage workout={props.workout} />
                }} />
                <Route component={PageNotFound} />
            </Switch>
            </div>
        </Router>
    </div>
)

export default AppRouter