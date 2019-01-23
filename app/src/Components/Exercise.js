import React from 'react'

 const Exercise = props => (
        <div>
            <p>Exercise: {props.exerciseName}</p>
            <p>Sets: {props.sets}</p>
            <p>Reps: {props.reps}</p>
            {/* <button onClick={e => props.deleteExercise(e)}>Delete Exercise</button> */}
        </div>
    )

export default Exercise