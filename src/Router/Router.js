import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../Components/Header'
import HomePage from '../Components/HomePage'
import PageNotFound from '../Components/PageNotFound'
import Schedule from '../Components/Schedule'
import DietPage from '../Components/DietPage'
import AddWorkoutPage from '../Components/AddWorkoutPage';

export default () => (
    <div>
        <Router>
            <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path='/diet' component={DietPage} />
                <Route exact path="/schedule" component={Schedule} />
                <Route exact path="/schedule/addWorkout" component={AddWorkoutPage} />
                <Route component={PageNotFound} />
            </Switch>
            </div>
        </Router>
    </div>
)
