import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Schedule extends Component {

    state = {

    }

    addWorkout = () => {
        console.log('User is attempting to add a future workout.')
    }

    render = () => (
        <div>
            <p>This is the schedule page</p>
            <Link to="/schedule/past">Past Workouts</Link>
            <p>Today's Workout</p>
            <Link to="/schedule/upcoming">Scheduled Workouts</Link>
            <Link to="/schedule/addWorkout"><button onClick={this.addWorkout}>Add Workout</button></Link>
        </div>
    )
}