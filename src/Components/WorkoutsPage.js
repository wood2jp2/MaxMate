import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import Workout from './Workout'
import AddWorkoutPage from './AddWorkoutPage'

export default class WorkoutsPage extends Component {

    state = {
        // This is going to need to be an array of workouts (consisting of exercises). A workout is an array of objects (exercises)
        workouts: [],
        addingWorkout: false
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

    onSubmitWorkout = e => {
        this.setState(prevState => ({
            workouts: [...prevState.workouts, e],
            addingWorkout: false
        }))
    }

    navigateToAddWorkout = () => {
        this.setState(() => ({ addingWorkout: true }))
        this.props.history.push('/workouts/addWorkout')
    }

    render = () => (
        <div>
            <h2>Workouts</h2>
            {
                !this.state.addingWorkout ?
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
                    :
                <AddWorkoutPage onSubmitWorkout={this.onSubmitWorkout} />
            }


        </div>
    )
}