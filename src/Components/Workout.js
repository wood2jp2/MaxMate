import React, { Component } from 'react'
import Exercise from './Exercise'

 const Workout = props => (
    <div>
        { props.exercises.map((exercise, index) => (
            <div key={index}>
                <Exercise 
                    {...exercise}
                    deleteExercise={props.deleteExercise}
                />
            </div>
        )) }
        <button id={props.id} onClick={e => props.deleteWorkout(e)}>Delete Workout</button>
        <button id={props.id} onClick={e => props.editWorkout(e)}>Edit Workout</button>

    </div>
)

export default Workout