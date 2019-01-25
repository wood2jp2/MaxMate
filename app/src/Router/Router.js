import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../Components/Header'
import HomePage from '../Components/HomePage'
import PageNotFound from '../Components/PageNotFound'
import WorkoutsHomePage from '../Components/Workouts/WorkoutsHomePage'
import DietPage from '../Components/Diet/DietPage'
import WorkoutPage from '../Components/Workouts/WorkoutPage'
import EditWorkoutPage from '../Components/Workouts/EditWorkoutPage'

const AppRouter = () => (
    <div>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path='/diet' component={DietPage} />
                    <Route path="/workouts/addWorkout" component={WorkoutPage} />
                    <Route exact path="/workouts" render={props => <WorkoutsHomePage {...props} />} />
                    <Route path="/workouts/editWorkout/:id" component={EditWorkoutPage} />
                    <Route path="/" component={HomePage} />

                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    </div>
)

export default AppRouter