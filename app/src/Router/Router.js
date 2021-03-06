import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../Components/Header'
import HomePage from '../Components/HomePage'
import PageNotFound from '../Components/PageNotFound'
import DietPage from '../Components/Diet/DietPage'
import BuildMealPage from '../Components/Diet/BuildMealPage'

import WorkoutsHomePage from '../Components/Workouts/WorkoutsHomePage'
import WorkoutPage from '../Components/Workouts/WorkoutPage'
import EditWorkoutPage from '../Components/Workouts/EditWorkoutPage'
import Register from '../Components/Register'

const AppRouter = () => (
    <div>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path='/register' component={Register} />
                    <Route path='/diet/logMeal' component={BuildMealPage} />
                    <Route exact path='/diet' component={DietPage} />
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