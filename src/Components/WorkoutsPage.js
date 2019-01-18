import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Workout from './Workout'

export default class WorkoutsPage extends Component {

    state = {
        // This is going to need to be an array of workouts (consisting of exercises). A workout is an array of objects (exercises)
        workouts: [[{ exerciseName: "ExampleBench", sets: 4, reps: 8 }], [{ exerciseName: "ExampleBench2", sets: 4, reps: 8 }]]
    }

    addWorkout = () => {
        
    }

    componentWillMount = () => {

        if (this.props.location.state.length > 0) {
            this.setState(prevState => {
                console.log("prevState.workouts: ", prevState.workouts)
                return {
                    workouts: prevState.workouts.concat(this.props.location.state)
                }
            }, () => {
                console.log("this.state.workouts: ", this.state.workouts)
            })
        }
        else {
            console.log("There is no workouts to add to the state at this moment")
        }
    }

    render = () => (
        <div>
            <p>This is the workouts page</p>
            <Link to="/workouts/past">Past Workouts</Link>
            <p>Today's Workout</p>
            <Link to="/workouts/upcoming">Scheduled Workouts</Link>
            <Link to="/workouts/addWorkout"><button>Add Workout</button></Link>
            {this.state.workouts.length > 0 &&
                    this.state.workouts.map((workout, index) => (
                        <Workout
                             key={index} 
                             exercises={[...workout]}
                        />
                        )
                    )
            }
        </div>
    )
}