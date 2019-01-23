import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../Components/Header'
import HomePage from '../Components/HomePage'
import PageNotFound from '../Components/PageNotFound'
import WorkoutsPage from '../Components/WorkoutsPage'
import DietPage from '../Components/DietPage'
import AddWorkoutPage from '../Components/AddWorkoutPage'
import Counter from '../Components/Counter'

const AppRouter = () => (
    <div>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path='/diet' component={DietPage} />
                    <Route path="/workouts/addWorkout" component={AddWorkoutPage} />
                    <Route exact path="/workouts" render={props => <WorkoutsPage {...props} />} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/" component={HomePage} />

                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    </div>
)

export default AppRouter