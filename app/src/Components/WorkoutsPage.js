import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Workout from './Workout'
import axios from 'axios'

export default class WorkoutsPage extends Component {

    state = {
        // This is going to need to be an array of workouts (consisting of exercises). A workout is an array of objects (exercises)
        workouts: [[{exerciseName: "Bench", sets: 2, reps: 10}]]
    }

    editWorkout = e => {
        const idToEdit = Number(e.target.id)
        this.props.history.push(`/workouts/${idToEdit}`, { workout: [...this.state.workouts[idToEdit]]})
    }

    deleteExercise = e => {
        console.log('Exercise request to be deleted')
    }

    deleteWorkout = e => {
        e.preventDefault()
        const idToDelete = Number(e.target.id)

        this.setState(prevState => {
           prevState.workouts.splice(idToDelete, 1)
           return { workouts: prevState.workouts }
        })
    }

    navigateToAddWorkout = () => {
        this.props.history.push({pathname: '/workouts/addWorkout' })
    }

    testApiCall = () => {
        axios.get('http://localhost:8008/api/testReactCall')
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    render = () => (
        <div>
            <h2>Workouts</h2>
            <button onClick={this.testApiCall}>Test API Call</button>
                <div>             
                    <Link to="/workouts/past"><h4>Past Workouts</h4></Link>
                    <h4>Today's Workout</h4>
                    <Link to="/workouts/upcoming"><h4>Scheduled Workouts</h4></Link>
                    <button onClick={this.navigateToAddWorkout}>Add Workout</button>
                    {
                        this.state.workouts.length > 0 ?
                        this.state.workouts.map((workout, index) => (
                            <div key={index}>
                                <h4>Workout #{index+1}: </h4>
                                <Workout
                                    id={index}
                                    exercises={[...workout]}
                                    editWorkout={this.editWorkout}
                                    deleteWorkout={this.deleteWorkout}
                                    deleteExercise={this.deleteExercise}
                                />
                            </div>
                            )
                        )
                        :
                        <p>There are currently no workouts to show!</p>
                    }
                </div>
        </div>
    )
}