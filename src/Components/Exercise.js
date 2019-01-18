import React, { Component } from 'react'

export default props => {
    return (
        <div>
            <p>Exercise: {props.exerciseName}</p>
            <p>Sets: {props.sets}</p>
            <p>Reps: {props.reps}</p>
        </div>
    )
}