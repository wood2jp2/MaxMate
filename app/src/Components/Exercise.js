import React from 'react'

 const Exercise = props => (
        <div>
            <p>Exercise: {props.exerciseName}</p>
            <p>Sets: {props.sets}</p>
            <p>Reps: {props.reps}</p>
        </div>
    )

export default Exercise