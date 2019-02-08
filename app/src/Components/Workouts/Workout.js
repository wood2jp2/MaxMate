import React from 'react'
import Exercise from './Exercise'
import { Link } from 'react-router-dom'

 const Workout = props => (
    <div>
        <Link to={`/workouts/editWorkout/${props.id}`}>
            <h4>Workout #{props.index}: </h4>
        </Link>
        { props.exercises.map((exercise, index) => (
            <div key={index}>
                <Exercise 
                    {...exercise}
                />
            </div>
        )) }
        <p>Scheduled for: {props.scheduledFor}</p>
        <p>Created At: {props.createdAt}</p>
    </div>
)

export default Workout